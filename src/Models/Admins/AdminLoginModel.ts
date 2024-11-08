import { PMAdminLogin } from "@/PMs/Admins/AdminLogin/AdminLoginPM";

export interface AdminLoginModel {
	setup: () => Promise<void>;
	onLogin: () => void;
}

export function getAdminLoginModel(
	pm: PMAdminLogin,
	router: any
): AdminLoginModel {
	const model: AdminLoginModel = {
		setup: async () => {
			pm.onLOGIN = model.onLogin;
		},
		onLogin: () => {
			router.push("/admin/superadmin");
		},
	};

	return model;
}
