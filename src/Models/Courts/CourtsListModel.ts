import Court from "@/types/Court";
import { getCourts } from "@/libs/APICommunicator/Courts/CourtsAPI";
import { PMCourtsList } from "@/PMs/Courts/CourtsListPM";

export interface CourtsListModel {
	courtsData: Court[];
	setup: () => Promise<void>;
}

export function getCourtsListModel(pm: PMCourtsList): CourtsListModel {
	const model: CourtsListModel = {
		courtsData: [],
		setup: async () => {
			pm.pmSidebar.linkNames = [
				"Dashboard",
				"Students List",
				"Courts List",
				"Party Posts List",
				"Reservations List",
				"Email",
				"Settings",
			];
			pm.pmSidebar.currentActive = 2;

			let courtsList: Court[] = await getCourts({ page: 1 });
			model.courtsData = courtsList;
			setTimeout(() => {
				// set the useState
				pm.courtsList = model.courtsData;
			}, 1000);
		},
		// getCourts: () => {
		// 	return model.courtsData.map((court) => ({
		// 		id: court.id,
		// 		name: court.name,
		// 		details: court.description,
		// 		selected: false,
		// 	}));
		// },
	};

	return model;
}
