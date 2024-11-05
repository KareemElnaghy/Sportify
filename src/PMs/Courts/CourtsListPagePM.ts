import Court from "@/types/Court";

export interface PMCourtsList {
	username: string;
	courtsList: Court[];
	filterCourts: () => void;
}

export const default_PMCourtsList: PMCourtsList = {
	username: "",
	courtsList: [],
	filterCourts: () => {},
};
