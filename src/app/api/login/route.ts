import { jwtHandler } from "@/libs/JWT/JWTHandler";
import {
	getErrorResponse,
	getOkResponse,
	NextAPIRes,
} from "@/types/APIResponse";
import { NextRequest, NextResponse } from "next/server";

interface PostResponseBody {
	renewalToken: string | null;
	accessToken: string | null;
}

interface LoginParams {
	username?: string;
	passwordHash?: string;

	renewalToken?: string;
}

type LoginReq = Required<LoginParams>;

export async function POST(req: NextRequest): NextAPIRes<PostResponseBody> {
	const body: LoginParams = await req.json();
	const loginReq: LoginReq = {
		username: body.username || "",
		passwordHash: body.passwordHash || "",
		renewalToken: body.renewalToken || "",
	};

	// check username and password against db or renew with renewalToken
	const isAuth = true;

	if (!isAuth) {
		const res = getErrorResponse({
			renewalToken: null,
			accessToken: null,
		});

		return NextResponse.json(res);
	}

	const renewalToken = await jwtHandler.signRenewal({
		username: loginReq.username,
	});
	const accessToken = await jwtHandler.signAccess({
		username: loginReq.username,
		role: "user",
	});

	const res = getOkResponse({
		renewalToken: renewalToken,
		accessToken: accessToken,
	});

	const response = NextResponse.json(res);

	response.cookies.set("renewalToken", renewalToken, {
		sameSite: "strict",
		maxAge: 60 * 60 * 24 * 30,
		path: "/",
	});

	response.cookies.set("accessToken", accessToken, {
		sameSite: "strict",
		maxAge: 60 * 60,
		path: "/",
	});

	return response;
}
