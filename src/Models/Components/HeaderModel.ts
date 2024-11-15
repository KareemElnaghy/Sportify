import { PMHeader } from "@/PMs/Components/HeaderPM";

interface PageWithHeader {
	pmHeader: PMHeader;
}

export interface HeaderModel {
	setup: () => Promise<void>;
	onPageChange: (newPage: number) => void;

	setPagesCount: (newPagesCount: number) => void;
	setCurrentPage: (newCurrentPage: number) => void;
}

export function getHeaderModel<T extends PageWithHeader>(
	pagePM: T,
	parentOnPageChange: (newPage: number) => void
): HeaderModel {
	const model: HeaderModel = {
		setup: async () => {
			const newHeaderPM: PMHeader = pagePM.pmHeader;
			newHeaderPM.pagesCount = 1;
			newHeaderPM.currentPage = 1;
			newHeaderPM.onPageChange = model.onPageChange;
			pagePM.pmHeader = newHeaderPM;
		},
		onPageChange: (newPage: number) => {
			parentOnPageChange(newPage);
		},

		setPagesCount: (newPagesCount: number) => {
			pagePM.pmHeader.pagesCount = newPagesCount;
			// possibly clear the currentPage to 1
		},
		setCurrentPage: (newCurrentPage: number) => {
			pagePM.pmHeader.currentPage = newCurrentPage;
		},
	};

	return model;
}
