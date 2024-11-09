import Admin from "@/types/Admin";
import { default_PMSidebar, PMSidebar } from "@/PMs/Components/SidebarPM";

export interface PMSuperAdmin {
  adminslist: Admin[];
  //sidebar
  pmSidebar: PMSidebar;
  //search
  Search: string;
  onSearchChange: () => void;
  //add admin
  onAddAdmin: () => void;
  //selection
  currentSelection: boolean[];
  onSelectionChanged: () => void;
  //delete
  ondeleteadmin: () => void;
}

export const default_PMSuperAdmin: PMSuperAdmin = {
  adminslist: [],
  //sidebar
  pmSidebar: default_PMSidebar,
  //search
  Search: "",
  onSearchChange: () => {},
  //add admin
  onAddAdmin: () => {},
  //selection
  currentSelection: [],
  onSelectionChanged: () => {},
  //delete
  ondeleteadmin: () => {},
};
