import Court from "@/types/Court";

interface courts {
	id: number;
	name: string;
	details: string;
	selected: boolean;
}

export interface PMCourtsList {
	courtsList: Court[];

	Search: string;
	onSearchChange: () => void;
	selectAll: boolean;
	selectOne: boolean;
	onSelectAll: () => void;
	onSelectOne: () => void;
	records: number;
	onRecordsChange: () => void;

	getCourts: () => courts[];
}

export const default_PMCourtsList: PMCourtsList = {
	courtsList: [],

	Search: "",
	onSearchChange: () => {},
	selectAll: false,
	selectOne: false,
	onSelectAll: () => {},
	onSelectOne: () => {},
	records: 25,
	onRecordsChange: () => {},

	getCourts: () => [],
};
