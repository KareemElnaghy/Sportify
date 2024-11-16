import Court from "@/types/Court";
import { getCourts } from "@/libs/APICommunicator/Courts/CourtsAPI";
import { default_PMCourtsList, PMCourtsList } from "@/PMs/Courts/CourtsListPM";
import {
	getSidebarModel,
	SidebarModel,
} from "@/Models/Components/SidebarModel";
import { getHeaderModel, HeaderModel } from "@/Models/Components/HeaderModel";
import { CourtsListData } from "@/libs/APICommunicator/Courts/CourtsDTO";
import { getHeaderPM } from "@/PMs/Components/HeaderPM";

export interface CourtsListModel {
	sidebarModel: SidebarModel | null;
	headerModel: HeaderModel | null;

	courtsData: Court[];
	setup: () => Promise<void>;

	fetchData: () => Promise<void>;

	onPageChange: () => void;

	onRecordsPerPageChange: () => void;

	onSearch: () => void;

	onSelectionChanged: () => void;
}

export function getCourtsListModel(
	pm: () => PMCourtsList,
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

			pm().onSelectionChanged = model.onSelectionChanged;

			model.fetchData();
		},

		fetchData: async () => {
			const page = pm().pmHeader.currentPage;
			const recordsPerPage = pm().pmHeader.currentRecordsPerPage;

			const { courtsCount, courtsList }: CourtsListData = await getCourts({
				page: page,
				recordsPerPage: recordsPerPage,
			});
			model.courtsData = courtsList;
			pm().courtsList = model.courtsData;

			const pagesCount =
				courtsCount > 0 ? Math.ceil(courtsCount / recordsPerPage) : 1;
			if (model.headerModel) model.headerModel.setPagesCount(pagesCount);
			if (model.headerModel) model.headerModel.setCurrentPage(page);
		},

		onPageChange: () => {
			model.fetchData();
		},

		onRecordsPerPageChange: () => {
			model.fetchData();
		},

		onSearch: () => {
			// model.fetchData();
		},

		onSelectionChanged: () => {
			// console.log("selection", pm().currentSelection);
		},
	};

	return model;
}
