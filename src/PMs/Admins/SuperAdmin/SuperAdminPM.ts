import Admin from "@/types/Admin";
import { default_PMSidebar, PMSidebar } from "@/PMs/Components/SidebarPM";

export interface PMSuperAdmin {
  pmSidebar: PMSidebar;

  Search: string;
  onSearchChange: () => void;
  onAddAdmin: () => void;
  //selection
  currentSelection: boolean[];
  onSelectionChanged: () => void;
  adminslist: Admin[];
  // sidebar
  // pages
}

export const default_PMSuperAdmin: PMSuperAdmin = {
  pmSidebar: default_PMSidebar,

  Search: "",
  onSearchChange: () => {},
  onAddAdmin: () => {},
  //selection
  currentSelection: [],
  onSelectionChanged: () => {},
  adminslist: [],
};
