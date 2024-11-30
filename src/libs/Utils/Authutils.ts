import { jwtHandler, TokenStruct } from "@/libs/JWT/JWTHandler";
import { UserAccount, noAuth } from "@/types/Auth";
import { Role, RolesArray } from "@/types/Authorization/Roles";
import { NextRequest } from "next/server";

interface AuthUtilstype {
	getUserVerify: (token: string | null) => Promise<UserAccount>;
	getUser: (token: string | null) => UserAccount;

	stringfy: (user: UserAccount) => string;
	parse: (userStr: string) => UserAccount;

	isAuthenticated: (user: UserAccount) => boolean;

	setUserOnReq: (req: NextRequest, user: UserAccount) => void;
	getUserFromReq: (req: NextRequest) => UserAccount;

	getTokenFromReq: (req: NextRequest) => string | null;
}

export const AuthUtils: AuthUtilstype = {
	getUserVerify: async (token: string | null): Promise<UserAccount> => {
		if (token == null) return noAuth;

		const tokenPayload = await jwtHandler.verify("Access", token);
		if (tokenPayload == null) return noAuth;

		const r: Role = RolesArray.includes(tokenPayload.body.role as Role)
			? (tokenPayload.body.role as Role)
			: "NoAuth";

		if (r == "NoAuth") return noAuth;

		return {
			isAuth: true,
			token: token,
			email: tokenPayload.body.username,
			role: r,
		};
	},

	getUser: (token: string | null): UserAccount => {
		if (token == null) return noAuth;

		const tokenPayload = jwtHandler.decode(token) as TokenStruct<"Access">;
		if (typeof tokenPayload == "string") return noAuth;

		if (!("body" in tokenPayload)) return noAuth;
		const body = tokenPayload["body"];
		if (!("username" in body)) return noAuth;
		if (!("role" in body)) return noAuth;

		const r: Role = RolesArray.includes(tokenPayload["body"]["role"] as Role)
			? (tokenPayload["body"]["role"] as Role)
			: "NoAuth";

		return {
			isAuth: true,
			token: token,
			email: tokenPayload["body"]["username"],
			role: r,
		};
	},

	isAuthenticated: (user: UserAccount) => {
		return user.isAuth;
	},
	stringfy: (user: UserAccount): string => {
		return JSON.stringify(user);
	},
	parse: (userStr: string): UserAccount => {
		return JSON.parse(userStr) as UserAccount;
	},

	setUserOnReq: (req: NextRequest, user: UserAccount): void => {
		req.headers.set("UserAccount", JSON.stringify(user));
	},

	getUserFromReq: (req: NextRequest): UserAccount => {
		const header = req.headers.get("UserAccount");
		if (header == null) return noAuth;

		return AuthUtils.parse(header);
	},
	getTokenFromReq: function (req: NextRequest): string | null {
		const token: string | null =
			req.headers.get("authorization") || req.headers.get("Authorization");
		if (token !== null) return extractTokenFromAuthorization(token);

		return req.cookies.get("accessToken")?.value || null;
	},
};

function extractTokenFromAuthorization(header: string | null): string | null {
	if (header == null) return null;
	if (!header.startsWith("Bearer ")) return null;
	return header.replace("Bearer ", "");
}
