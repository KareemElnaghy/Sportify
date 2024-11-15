import { getProxyOnAttribute } from "@/hooks/useStateObject";

export interface PMHeader {
	pagesCount: number;
	currentPage: number;

	onPageChange: () => void;
}

export const default_PMHeader: PMHeader = {
	pagesCount: 1,
	currentPage: 1,
	onPageChange: () => {},
};

export function getHeaderPM<T extends { pmHeader: PMHeader }>(pm: T): PMHeader {
	return getProxyOnAttribute(pm, pm.pmHeader, "pmHeader");
}
