import { PMSuperAdmin } from "@/PMs/Admins/SuperAdmin/SuperAdminPM";
import { Admin } from "@/Views/Components/Adminlist";
import AdminLogin from "@/types/Admin";

export interface SuperAdminModel {
	setup: () => Promise<void>;
	onSearchChange: (search: string) => void;
	onAddAdmin: (admin: AdminLogin) => void;
	onSelectAll: () => void;
	onSelectOne: () => void;
	admins: Admin[];
	
}

export function getSuperAdminModel(pm: PMSuperAdmin): SuperAdminModel {
	const model: SuperAdminModel = {
		setup: async () => {
			pm.onSearchChange = model.onSearchChange;
			pm.onAddAdmin = model.onAddAdmin;
			pm.onSelectAll = model.onSelectAll;
			pm.onSelectOne = model.onSelectOne;
			pm.admins = model.admins; //write API to get admins but get only certain data
		},
		onSearchChange: (search: string) => {
			if (search !== "" && search !== null) {
			  model.admins = pm.admins.filter((admin) => 
				admin.name.toLowerCase().includes(search.toLowerCase())
			  );
			} else model.admins = []; // query all admins API
			pm.admins = model.admins;
		  },
		onAddAdmin: (admin: AdminLogin) => {
			//query to add Admin to DB
			//query to pull new admins or just add data
			//pm.admins = model.admins;
		},
		onSelectAll: () => {},
		onSelectOne: () => {},
		admins: [] // write API to get admins but get only certain data,
	};

	return model;
}
