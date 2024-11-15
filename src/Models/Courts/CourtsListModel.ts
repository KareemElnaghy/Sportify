import Court from "@/types/Court";
import { getCourts } from "@/libs/APICommunicator/Courts/CourtsAPI";
import { PMCourtsList } from "@/PMs/Courts/CourtsListPM";
import {
	getSidebarModel,
	SidebarModel,
} from "@/Models/Components/SidebarModel";
import { getHeaderModel, HeaderModel } from "@/Models/Components/HeaderModel";

export interface CourtsListModel {
	sidebarModel: SidebarModel | null;
	headerModel: HeaderModel | null;

	courtsData: Court[];
	setup: () => Promise<void>;

	onPageChange: (newPage: number) => void;
}

export function getCourtsListModel(
	pm: PMCourtsList,
	router: any
): CourtsListModel {
	const model: CourtsListModel = {
		courtsData: [],
		sidebarModel: null,
		headerModel: null,
		setup: async () => {
			if (!model.sidebarModel)
				model.sidebarModel = getSidebarModel(pm, router, 2);
			model.sidebarModel.setup();

			if (!model.headerModel)
				model.headerModel = getHeaderModel(pm, model.onPageChange);
			model.headerModel.setup();

			let courtsList: Court[] = await getCourts({ page: 1 });
			model.courtsData = courtsList;
			pm.courtsList = model.courtsData;
			// adjust pages in headerModel
			// update pages by
			// if (model.headerModel) model.headerModel.setPagesCount();
			// if (model.headerModel) model.headerModel.setCurrentPage();
		},

		onPageChange: (newPage: number) => {
			// TODO:
			// logic to request new page
			// update pages by
			// if (model.headerModel) model.headerModel.setPagesCount();
			// if (model.headerModel) model.headerModel.setCurrentPage();
		},
	};

	return model;
}
