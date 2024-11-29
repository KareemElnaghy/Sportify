import { loginAdmin } from "@/libs/APICommunicator/Auth/AdminLoginAPI";
import { PMAdminLogin } from "@/PMs/Admins/AdminLogin/AdminLoginPM";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export interface AdminLoginModel {
	setup: () => Promise<void>;
	onLogin: () => Promise<void>;
}

export function getAdminLoginModel(
	pm: () => PMAdminLogin,
	router: AppRouterInstance
): AdminLoginModel {
	const model: AdminLoginModel = {
		setup: async () => {
			pm().onLOGIN = model.onLogin;
		},
		onLogin: async () => {
			const res = await loginAdmin({
				username: pm().email,
				password: pm().password,
			});

			if (res.isSuccess) {
				router.push("/admin/courts");
			}
		},
	};

	return model;
}
