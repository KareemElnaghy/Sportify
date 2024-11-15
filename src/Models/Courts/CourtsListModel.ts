import Court from "@/types/Court";
import { getCourts } from "@/libs/APICommunicator/Courts/CourtsAPI";
import { PMCourtsList } from "@/PMs/Courts/CourtsListPM";
import { getSidebarModel, SidebarModel } from "../Components/SidebarModel";

export interface CourtsListModel {
	sidebarModel: SidebarModel | null;
	courtsData: Court[];
	setup: () => Promise<void>;
}

export function getCourtsListModel(
	pm: PMCourtsList,
	router: any
): CourtsListModel {
	const model: CourtsListModel = {
		courtsData: [],
		sidebarModel: getSidebarModel(pm.pmSidebar, router, 2),
		setup: async () => {
			if (model.sidebarModel) model.sidebarModel.setup(pm);

			let courtsList: Court[] = await getCourts({ page: 1 });
			model.courtsData = courtsList;
			pm.courtsList = model.courtsData;
		},
	};

	return model;
}
