import { PMSuperAdmin } from "@/PMs/Admins/SuperAdmin/SuperAdminPM";
import { Admin } from "@/Views/Components/Adminlist";
import AdminLogin from "@/types/Admin";

export interface SuperAdminModel {
	setup: () => Promise<void>;
	onSearchChange: () => void;
	onAddAdmin: () => void;
	onSelectAll: () => void;
	onSelectOne: () => void;
	admins: Admin[];
	
}

export function getSuperAdminModel(pm: PMSuperAdmin): SuperAdminModel {
	const model: SuperAdminModel = {
		setup: async () => {
			model.admins = []; //API
			pm.onSearchChange = model.onSearchChange;
			pm.onAddAdmin = model.onAddAdmin;
			pm.onSelectAll = model.onSelectAll;
			pm.onSelectOne = model.onSelectOne;
			pm.admins = model.admins;
		},
		onSearchChange: () => {
			if (pm.Search !== "" && pm.Search !== null) {
			  pm.admins = model.admins.filter((admin) => 
				admin.name.toLowerCase().includes(pm.Search.toLowerCase())
			  );
			} else 
			  pm.admins = model.admins;
		  },
		onAddAdmin: () => {
			//query to add Admin to DB
			//query to pull new admins or just add data
			//pm.admins = model.admins;
		},
		onSelectAll: () => {},
		onSelectOne: () => {
			
		},
		admins: [] // write API to get admins but get only certain data,
	};

	return model;
}
