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

	onPageChange: () => void;

	onRecordsPerPageChange: () => void;

	onSearch: () => void;
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

			if (!model.headerModel) model.headerModel = getHeaderModel(pm, model);
			model.headerModel.setup();

			let courtsList: Court[] = await getCourts({ page: 1 });
			model.courtsData = courtsList;
			pm.courtsList = model.courtsData;
			// adjust pages in headerModel
			// update pages by
			// if (model.headerModel) model.headerModel.setPagesCount(x);
			// if (model.headerModel) model.headerModel.setCurrentPage(x);
		},

		onPageChange: () => {
			// TODO:
			// logic to request new page
			// update pages by
			// if (model.headerModel) model.headerModel.setPagesCount(x);
			// if (model.headerModel) model.headerModel.setCurrentPage(x);
		},

		onRecordsPerPageChange: () => {
			// TODO:
			// logic to request new page with correct records amount
			// update pages by
			// if (model.headerModel) model.headerModel.setPagesCount(x);
			// if (model.headerModel) model.headerModel.setCurrentPage(x);
		},

		onSearch: () => {
			// TODO:
			// logic to request from backend new page with correct searched data
			// update pages by
			// if (model.headerModel) model.headerModel.setPagesCount(x);
			// if (model.headerModel) model.headerModel.setCurrentPage(x);
		},
	};

	return model;
}
