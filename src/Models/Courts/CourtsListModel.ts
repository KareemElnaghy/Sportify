import Court from "@/types/Court";
import { getCourts } from "@/libs/APICommunicator/Courts/CourtsAPI";
import { default_PMCourtsList, PMCourtsList } from "@/PMs/Courts/CourtsListPM";
import {
	getSidebarModel,
	SidebarModel,
} from "@/Models/Components/SidebarModel";
import { getHeaderModel, HeaderModel } from "@/Models/Components/HeaderModel";
import { CourtsListData } from "@/libs/APICommunicator/Courts/CourtsDTO";

export interface CourtsListModel {
	sidebarModel: SidebarModel | null;
	headerModel: HeaderModel | null;

	fetchedParams: {
		page: number;
		records: number;
		searchQuery: string;
	};

	courtsData: Court[];
	setup: () => Promise<void>;

	fetchData: (isForceUpdate?: boolean) => Promise<void>;

	onPageChange: () => void;
	onRecordsPerPageChange: () => void;
	onSearch: () => void;
}

export function getCourtsListModel(
	pm: () => PMCourtsList,
	router: any
): CourtsListModel {
	const model: CourtsListModel = {
		courtsData: [],
		sidebarModel: null,
		headerModel: null,

		fetchedParams: {
			page: 0,
			records: 0,
			searchQuery: "",
		},

		setup: async () => {
			if (!model.sidebarModel)
				model.sidebarModel = getSidebarModel(pm, router, 2);
			model.sidebarModel.setup();

			if (!model.headerModel) model.headerModel = getHeaderModel(pm, model);
			model.headerModel.setup();

			model.fetchData();
		},

		fetchData: async (isForceUpdate: boolean = false) => {
			const page = pm().pmHeader.currentPage;
			const recordsPerPage = pm().pmHeader.currentRecordsPerPage;
			const searchQuery = pm().pmHeader.currentSearchQuery;

			if (
				!isForceUpdate &&
				page == model.fetchedParams.page &&
				recordsPerPage == model.fetchedParams.records &&
				searchQuery == model.fetchedParams.searchQuery
			)
				return;

			const { courtsCount, courtsList }: CourtsListData = await getCourts({
				page: page,
				recordsPerPage: recordsPerPage,
				searchQuery: searchQuery,
			});
			model.courtsData = courtsList;
			pm().courtsList = model.courtsData;

			model.fetchedParams = {
				page: page,
				records: recordsPerPage,
				searchQuery: searchQuery,
			};

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
			model.fetchData();
		},
	};

	return model;
}
