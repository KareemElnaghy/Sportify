import { serialize } from "cookie";
import { jwtHandler } from "@/libs/JWT/JWTHandler";
import APIResponse, {
	getErrorResponse,
	getOkResponse,
	NextAPIRes,
} from "@/types/APIResponse";
import { NextRequest, NextResponse } from "next/server";
import { REPL_MODE_SLOPPY } from "repl";

interface PostResponseBody {
	accessToken: string | null;
}

interface LoginParams {
	username?: string;
	passwordHash?: string;
}

type LoginReq = Required<LoginParams>;

export async function POST(req: NextRequest): NextAPIRes<PostResponseBody> {
	const body: LoginParams = await req.json();
	const loginReq: LoginReq = {
		username: body.username || "",
		passwordHash: body.passwordHash || "",
	};

	// check username and password against db
	const isAuth = true;

	let res;
	if (!isAuth) {
		res = getErrorResponse({
			accessToken: null,
		});

		return NextResponse.json(res);
	}

	const accessToken = await jwtHandler.signAccess({
		username: loginReq.username,
		role: "user",
	});

	res = getOkResponse({
		accessToken: accessToken,
	});

	const response = NextResponse.json(res);

	response.cookies.set("accessToken", accessToken, {
		sameSite: "strict",
		maxAge: 60 * 60,
		path: "/",
	});
	return response;
}
