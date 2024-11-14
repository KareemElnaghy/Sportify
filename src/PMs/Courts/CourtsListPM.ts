import Court from "@/types/Court";
import { default_PMSidebar, PMSidebar } from "../Components/SidebarPM";

export interface PMCourtsList {
  courtsList: Court[];
  //sidebar
  pmSidebar: PMSidebar;
  //selection
  currentSelection: boolean[];
  onSelectionChanged: () => void;
}

export const default_PMCourtsList: PMCourtsList = {
  courtsList: [],
  //sidebar
  pmSidebar: default_PMSidebar,
  //selection
  currentSelection: [],
  onSelectionChanged: () => {},
};
