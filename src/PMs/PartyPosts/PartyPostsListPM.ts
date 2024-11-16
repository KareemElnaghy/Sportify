import PartyPost from "@/types/PartyPost";
import { default_PMSidebar, PMSidebar } from "@/PMs/Components/SidebarPM";
import { default_PMHeader, PMHeader } from "../Components/HeaderPM";
export interface PMPartyPostsList {
	partyPostsList: PartyPost[];
	//sidebar
	pmSidebar: PMSidebar;
	// header
	pmHeader: PMHeader;
	//selection
	currentSelection: boolean[];
	onSelectionChanged: () => void;
}

export const default_PMPartyPostsList: PMPartyPostsList = {
	partyPostsList: [],
	//sidebar
	pmSidebar: default_PMSidebar,
	// header
	pmHeader: default_PMHeader,
	//selection
	currentSelection: [],
	onSelectionChanged: () => {},
};
