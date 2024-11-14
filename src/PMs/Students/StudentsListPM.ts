import Student from "@/types/Student";
import { default_PMSidebar, PMSidebar } from "../Components/SidebarPM";

export interface PMStudentList {
  studentsList: Student[];
  //sidebar
  pmSidebar: PMSidebar;
  //search
  Search: string;
  onSearchChange: () => void;
  //selection
  currentSelection: boolean[];
  onSelectionChanged: () => void;
}

export const default_PMStudentList: PMStudentList = {
  studentsList: [],
  //sidebar
  pmSidebar: default_PMSidebar,
  //search
  Search: "",
  onSearchChange: () => {},
  //selection
  currentSelection: [],
  onSelectionChanged: () => {},
};
