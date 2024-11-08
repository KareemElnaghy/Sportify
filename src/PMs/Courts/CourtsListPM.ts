import Court from "@/types/Court";
import { default_PMSidebar, PMSidebar } from "../Components/SidebarPM";

export interface PMCourtsList {
	pmSidebar: PMSidebar;

	courtsList: Court[];

	currentSelection: boolean[];
	onSelectionChanged: () => void;
}

export const default_PMCourtsList: PMCourtsList = {
	pmSidebar: default_PMSidebar,

	courtsList: [],

	currentSelection: [],
	onSelectionChanged: () => {},
};
