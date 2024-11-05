import { Court } from "@/DataClasses/Court";
import { getCourts } from "@/libs/APICommunicator/Courts/CourtsAPI";
import { PMCourtsList } from "@/PMs/Courts/CourtsListPagePM";

export interface CourtsListModel {
	courtsData: Court[];
	setup: () => Promise<void>;
	onFilterCourts: () => void;
}

export function getModel(pm: PMCourtsList): CourtsListModel {
	const model: CourtsListModel = {
		courtsData: [],
		setup: async () => {
			pm.username = "smth";
			pm.filterCourts = model.onFilterCourts;

			let courtsList: Court[] = await getCourts({ page: 5 });
			model.courtsData = courtsList;
			setTimeout(() => {
				// set the useState
				pm.courtsList = model.courtsData;
			}, 1000);
		},
		onFilterCourts: () => {
			let filteredList = [model.courtsData[0]];
			pm.courtsList = filteredList;
		},
	};

	return model;
}
