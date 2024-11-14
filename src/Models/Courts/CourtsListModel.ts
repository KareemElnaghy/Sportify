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
			let courtsList: Court[] = await getCourts({ page: 1 });
			model.courtsData = courtsList;
			setTimeout(() => {
				// set the useState
				pm.courtsList = model.courtsData;
			}, 1000);
		},
	};

	return model;
}
