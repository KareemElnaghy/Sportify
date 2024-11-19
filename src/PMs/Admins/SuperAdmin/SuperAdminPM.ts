import { default_PMHeader, PMHeader } from "@/PMs/Components/HeaderPM";
import { default_PMSidebar, PMSidebar } from "@/PMs/Components/SidebarPM";
import Admin from "@/types/Admin";

export interface PMSuperAdmin {
  adminslist: Admin[];
  setAdminsList: (newAdminsList: Admin[]) => void;
  //sidebar
  pmSidebar: PMSidebar;
  //header
  pmHeader: PMHeader;
  //search
  Search: string;
  onSearchChange: () => void;
  //add admin
  onAddAdmin: () => void;
  //selection
  currentSelection: boolean[];
  onSelectionChanged: () => void;
  //delete
  ondeleteadmin: (index: number) => void;
}

export const default_PMSuperAdmin: PMSuperAdmin = {
  adminslist: [],
  setAdminsList: ([]) => {},
  //sidebar
  pmSidebar: default_PMSidebar,
  //header
  pmHeader: default_PMHeader,
  //search
  Search: "",
  onSearchChange: () => {},
  //add admin
  onAddAdmin: () => {},
  //selection
  currentSelection: [],
  onSelectionChanged: () => {},
  //delete
  ondeleteadmin: (index: number) => {},
};
