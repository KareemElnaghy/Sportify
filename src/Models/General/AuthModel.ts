import { AuthUtils } from "@/libs/Utils/Authutils";
import { UserAccount } from "@/types/Auth";
import Cookies from "js-cookie";

// stateless
export interface AuthModel {
	setup: () => Promise<void>;

	getToken: () => string | null;

	getUser: () => UserAccount;

	logout: () => void;
}

const model: AuthModel = {
	setup: async () => {},

	getToken: (): string | null => {
		const token = Cookies.get("accessToken") || null;
		return token;
	},

	getUser: (): UserAccount => {
		const token = model.getToken();
		return AuthUtils.getUser(token);
	},

	logout: () => {
		Cookies.remove("accessToken", { path: "/" });
	},
};

export function getAuthModel(): AuthModel {
	return model;
}
