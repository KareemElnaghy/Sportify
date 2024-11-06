import Court from "@/types/Court";

export interface PMCourtsList {
  username: string;
  courtsList: Court[];
  filterCourts: () => void;
  Search: string;
  onSearchChange: () => void;
  selectAll: boolean;
  selectOne: boolean;
  onSelectAll: () => void;
  onSelectOne: () => void;
  records: number;
  onRecordsChange: () => void;
}

export const default_PMCourtsList: PMCourtsList = {
  username: "",
  courtsList: [],
  filterCourts: () => {},
  Search: "",
  onSearchChange: () => {},
  selectAll: false,
  selectOne: false,
  onSelectAll: () => {},
  onSelectOne: () => {},
  records: 25,
  onRecordsChange: () => {},
};
