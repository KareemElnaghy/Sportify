import { AuthUtils } from "@/libs/Utils/Authutils";
import { getErrorResponse } from "@/types/APIResponse";
import { NextRequest, NextResponse } from "next/server";

export async function APIAuthOnlyMiddleware(
	req: NextRequest
): Promise<undefined | NextResponse> {
	const user = AuthUtils.getUserFromReq(req);
	if (!AuthUtils.isAuthenticated(user)) {
		return NextResponse.json(
			getErrorResponse({
				errorMessage: "Authentication Invalid",
			})
		);
	}
}
