export interface PMHeader {
	pagesCount: number;
	currentPage: number;

	onPageChange: (newPage: number) => void;
}

export const default_PMHeader: PMHeader = {
	pagesCount: 1,
	currentPage: 1,
	onPageChange: (newPage: number) => {},
};
