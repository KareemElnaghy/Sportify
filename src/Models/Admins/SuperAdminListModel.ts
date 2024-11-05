import { PMSuperAdmin } from "@/PMs/Admins/SuperAdmin/SuperAdminPagePM";

export interface SuperAdminModel {
	setup: () => Promise<void>;
}

export function getSuperAdminModel(pm: PMSuperAdmin): SuperAdminModel {
	const model: SuperAdminModel = {
		setup: async () => {},
	};

	return model;
}
