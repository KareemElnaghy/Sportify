import { PMSuperAdmin } from "@/PMs/Admins/SuperAdmin/SuperAdminPM";
import Admin from "@/types/Admin";
import { getSidebarModel, SidebarModel } from "../Components/SidebarModel";
import { getHeaderModel, HeaderModel } from "../Components/HeaderModel";

export interface SuperAdminModel {
	sidebarModel: SidebarModel | null;
	headerModel: HeaderModel | null;

	admins: Admin[];
	setup: () => Promise<void>;
	onSearchChange: () => void;
	onAddAdmin: () => void;

	onPageChange: (newPage: number) => void;
}

export function getSuperAdminModel(
	pm: PMSuperAdmin,
	router: any
): SuperAdminModel {
	const model: SuperAdminModel = {
		sidebarModel: null,
		headerModel: null,

		admins: [], // write API to get admins but get only certain data,
		setup: async () => {
			if (!model.sidebarModel)
				model.sidebarModel = getSidebarModel(pm, router, 0);
			model.sidebarModel.setup();

			// pm.pmSidebar.linkNames = [
			// 	"Dashboard",
			// 	"Admins",
			// 	"Email",
			// 	"Profile",
			// 	"Settings",
			// ];
			// pm.pmSidebar.currentActive = 1;

			if (!model.headerModel)
				model.headerModel = getHeaderModel(pm, model.onPageChange);
			model.headerModel.setup();

			//test
			const dummyData: Admin[] = [
				{
					email: "alice.johnson@example.com",
					firstName: "Alice",
					lastName: "Johnson",
				},
				{
					email: "john.smith@example.com",
					firstName: "John",
					lastName: "Smith",
				},
			];

			// Set studentsData to the dummy data
			model.admins = dummyData;
			pm.adminslist = model.admins;

			pm.onSearchChange = model.onSearchChange;
			pm.onAddAdmin = model.onAddAdmin;
		},
		onSearchChange: () => {
			// if (pm.Search !== "" && pm.Search !== null) {
			// 	pm.admins = model.admins.filter((admin) =>
			// 		admin.name.toLowerCase().includes(pm.Search.toLowerCase())
			// 	);
			// } else pm.admins = model.admins;
		},
		onAddAdmin: () => {
			//query to add Admin to DB
			//query to pull new admins or just add data
			//pm.admins = model.admins;
		},

		onPageChange: (newPage: number) => {},
	};

	return model;
}
