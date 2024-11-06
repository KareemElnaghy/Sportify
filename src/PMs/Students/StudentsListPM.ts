import Student from "@/types/Student";

export interface PMStudentList {
  studentsList: Student[];
  Search: string;
  onSearchChange: () => void;
  selectAll: boolean;
  selectOne: boolean;
  onSelectAll: () => void;
  onSelectOne: () => void;
  records: number;
  onRecordsChange: () => void;
  //sidebar
  //pages
}

export const default_PMStudentList: PMStudentList = {
  studentsList: [],
  Search: "",
  onSearchChange: () => {},
  selectAll: false,
  selectOne: false,
  onSelectAll: () => {},
  onSelectOne: () => {},
  records: 25,
  onRecordsChange: () => {},
};
