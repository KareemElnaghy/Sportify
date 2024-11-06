import Court from "@/types/Court";
import { getCourts } from "@/libs/APICommunicator/Courts/CourtsAPI";
import { PMCourtsList } from "@/PMs/Courts/CourtsListPM";

interface courts {
	id: number;
	name: string;
	details: string;
	selected: boolean;
  }

export interface CourtsListModel {
	courtsData: Court[];
	setup: () => Promise<void>;
	onFilterCourts: () => void;
	getCourts: () => courts[];
}

export function getCourtsListModel(pm: PMCourtsList): CourtsListModel {
	const model: CourtsListModel = {
		courtsData: [],
		setup: async () => {
			pm.username = "smth";
			pm.filterCourts = model.onFilterCourts;
			pm.getCourts = model.getCourts;

			let courtsList: Court[] = await getCourts({ page: 1 });
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
		getCourts: () => {
			return model.courtsData.map((court) => ({
				id: court.id,
				name: court.name,
				details: court.description,
				selected: false,
			}));
		}
	};

	return model;
}
