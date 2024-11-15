import { PMHeader } from "@/PMs/Components/HeaderPM";

interface PageWithHeader {
	pmHeader: PMHeader;
}

export interface HeaderModel {
	setup: () => Promise<void>;
	onPageChange: () => void;

	setPagesCount: (newPagesCount: number) => void;
	setCurrentPage: (newCurrentPage: number) => void;
}

export function getHeaderModel<T extends PageWithHeader>(
	pagePM: PageWithHeader,
	parentOnPageChange: () => void
): HeaderModel {
	const model: HeaderModel = {
		setup: async () => {
			const newHeaderPM: PMHeader = pagePM.pmHeader;
			newHeaderPM.pagesCount = 1;
			newHeaderPM.currentPage = 1;
			newHeaderPM.onPageChange = model.onPageChange;
			pagePM.pmHeader = newHeaderPM;
		},
		onPageChange: () => {
			parentOnPageChange();
		},

		setPagesCount: (newPagesCount: number) => {
			pagePM.pmHeader = { ...pagePM.pmHeader, pagesCount: newPagesCount };
			// possibly clear the currentPage to 1
		},
		setCurrentPage: (newCurrentPage: number) => {
			pagePM.pmHeader = { ...pagePM.pmHeader, currentPage: newCurrentPage };
		},
	};

	return model;
}
