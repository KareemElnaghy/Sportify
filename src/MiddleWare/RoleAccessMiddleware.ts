import { AuthUtils } from "@/libs/Utils/Authutils";
import { MiddlewareFunction } from "@/middleware";
import { NextRequest, NextResponse } from "next/server";

export function RoleAccessMiddleware(
	roles: string[],
	defaultRedirect?: string
): MiddlewareFunction {
	return (req: NextRequest) => {
		const user = AuthUtils.getUserFromReq(req);
		if (!roles.includes(user.role)) {
			return NextResponse.redirect(
				new URL(defaultRedirect || "/admin/courts", req.url)
			);
		}
	};
}
