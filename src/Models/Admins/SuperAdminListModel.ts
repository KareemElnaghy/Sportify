import { PMSuperAdmin } from "@/PMs/Admins/SuperAdmin/SuperAdminPM";

export interface SuperAdminModel {
	setup: () => Promise<void>;
}

export function getSuperAdminModel(pm: PMSuperAdmin): SuperAdminModel {
	const model: SuperAdminModel = {
		setup: async () => {},
	};

	return model;
}
