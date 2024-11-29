import type { NextRequest, NextResponse } from "next/server";
import { UserAccount } from "@/types/Auth";
import { AuthUtils } from "./libs/Utils/Authutils";
import { NoAuthMiddleware } from "./MiddleWare/NoAuthMiddleware";
import { AuthOnlyMiddleware } from "./MiddleWare/AuthOnlyMiddleware";
import { RoleAccessMiddleware } from "./MiddleWare/RoleAccessMiddleware";
import { APIAuthOnlyMiddleware } from "./MiddleWare/APIAuthOnlyMiddleware";

export type MiddlewareFunction = (
	req: NextRequest,
	res?: NextResponse
) => undefined | NextResponse | Promise<undefined | NextResponse>;

interface MiddlewareTableType {
	[path: string]: MiddlewareFunction | MiddlewareFunction[];
}

const middlewareTable: MiddlewareTableType = {
	"/admin/login": NoAuthMiddleware,
	"/admin/superadmin": [
		AuthOnlyMiddleware,
		RoleAccessMiddleware(["superadmin"]),
	],
	"/admin/students": AuthOnlyMiddleware,
	"/admin/courts": AuthOnlyMiddleware,
	"/admin/partyposts": AuthOnlyMiddleware,

	"/api/courts": APIAuthOnlyMiddleware,
	"/api/adminAccounts": APIAuthOnlyMiddleware,
	"/api/partyPosts": APIAuthOnlyMiddleware,
	"/api/students": APIAuthOnlyMiddleware,

	// messaging
	// courtsRegistrations
};

export async function middleware(req: NextRequest) {
	const token = AuthUtils.getTokenFromReq(req);
	const user: UserAccount = await AuthUtils.getUserVerify(token);
	AuthUtils.setUserOnReq(req, user);

	for (const path in middlewareTable) {
		if (req.nextUrl.pathname.startsWith(path)) {
			let fn = middlewareTable[path as keyof MiddlewareTableType];
			if (!Array.isArray(fn)) {
				fn = [fn];
			}
			let res: NextResponse<unknown> | undefined = undefined;
			for (let i = 0; i < fn.length; i++) {
				if (res == undefined) {
					res = await fn[i].call(null, req, res);
				}
			}
			if (res !== undefined) return res;
			break;
		}
	}
}

export const config = {
	matcher: ["/api/:path*", "/admin/:path*"],
	unstable_allowDynamic: ["/*"],
};
