import { Admin } from "@/Views/Components/Adminlist";
import AdminLogin from "@/types/Admin";

export interface PMSuperAdmin {
  Search: string;
  onSearchChange: (search: string) => void;
  onAddAdmin: (admin: AdminLogin) => void;
  selectAll: boolean;
  selectOne: boolean;
  onSelectAll: () => void;
  onSelectOne: () => void;
  admins: Admin[];
  // sidebar
  // pages
}

export const default_PMSuperAdmin: PMSuperAdmin = {
  Search: "",
  onSearchChange: (search: string) => {},
  onAddAdmin: (admin: AdminLogin) => {},
  selectAll: false,
  selectOne: false,
  onSelectAll: () => {},
  onSelectOne: () => {},
  admins: [],
};
