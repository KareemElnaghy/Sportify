import { PMSuperAdmin } from "@/PMs/Admins/SuperAdmin/SuperAdminPM";
import Admin from "@/types/Admin";
import { getSidebarModel, SidebarModel } from "../Components/SidebarModel";
import { getHeaderModel, HeaderModel } from "../Components/HeaderModel";

export interface SuperAdminModel {
	sidebarModel: SidebarModel | null;
	headerModel: HeaderModel | null;

	admins: Admin[];
	setup: () => Promise<void>;
	onAddAdmin: () => void;

	onPageChange: () => void;
	onRecordsPerPageChange: () => void;
	onSearch: () => void;
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

			if (!model.headerModel) model.headerModel = getHeaderModel(pm, model);
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

			pm.onAddAdmin = model.onAddAdmin;
		},
		onAddAdmin: () => {
			//query to add Admin to DB
			//query to pull new admins or just add data
			//pm.admins = model.admins;
		},

		onPageChange: () => {},
		onRecordsPerPageChange: () => {},
		onSearch: () => {},
	};

	return model;
}
