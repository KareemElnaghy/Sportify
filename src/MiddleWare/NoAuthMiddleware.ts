import { AuthUtils } from "@/libs/Utils/Authutils";
import { NextRequest, NextResponse } from "next/server";

export function NoAuthMiddleware(req: NextRequest): undefined | NextResponse {
	const user = AuthUtils.getUserFromReq(req);
	if (AuthUtils.isAuthenticated(user)) {
		return NextResponse.redirect(new URL("/admin/courts", req.url));
	}
}
