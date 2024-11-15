import Court from "@/types/Court";
import { default_PMSidebar, PMSidebar } from "@/PMs/Components/SidebarPM";
import { default_PMHeader, PMHeader } from "@/PMs/Components/HeaderPM";

export interface PMCourtsList {
	courtsList: Court[];
	//sidebar
	pmSidebar: PMSidebar;
	// header
	pmHeader: PMHeader;
	//selection
	currentSelection: boolean[];
	onSelectionChanged: () => void;
}

export const default_PMCourtsList: PMCourtsList = {
	courtsList: [],
	//sidebar
	pmSidebar: default_PMSidebar,
	// header
	pmHeader: default_PMHeader,
	//selection
	currentSelection: [],
	onSelectionChanged: () => {},
};
