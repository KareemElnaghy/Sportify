import PartyPost from "@/types/PartyPost";
import { default_PMSidebar, PMSidebar } from "@/PMs/Components/SidebarPM";
export interface PMPartyPostsList {
  partyPostsList: PartyPost[];
  //sidebar
  pmSidebar: PMSidebar;
  //search
  Search: string;
  onSearchChange: () => void;
  //selection
  currentSelection: boolean[];
  onSelectionChanged: () => void;
}

export const default_PMPartyPostsList: PMPartyPostsList = {
  partyPostsList: [],
  //sidebar
  pmSidebar: default_PMSidebar,
  //search
  Search: "",
  onSearchChange: () => {},
  //selection
  currentSelection: [],
  onSelectionChanged: () => {},
};
