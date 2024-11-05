import { Court } from "@/DataClasses/Court";

export interface PMCourtsList {
	username: string;
	courtsList: Court[];
	filterCourts: (pm: PMCourtsList) => void;
}

export const default_PMCourtsList: PMCourtsList = {
	username: "",
	courtsList: [],
	filterCourts: (default_PMCourtsList) => {},
};
