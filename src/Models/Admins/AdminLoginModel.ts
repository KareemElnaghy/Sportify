import { PMAdminLogin } from "@/PMs/Admins/AdminLogin/AdminLoginPagePM";

export interface AdminLoginModel {
	setup: () => Promise<void>;
}

export function getAdminLoginModel(pm: PMAdminLogin): AdminLoginModel {
	const model: AdminLoginModel = {
		setup: async () => {},
	};

	return model;
}
