export interface PMSuperAdmin {
  Search: string;
  onSearchChange: () => void;
  onAddAdmin: () => void;
  // pages
}

export const default_PMSuperAdmin: PMSuperAdmin = {
  Search: "",
  onSearchChange: () => {},
  onAddAdmin: () => {},
};
