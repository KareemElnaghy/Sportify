export interface PMSuperAdmin {
    onAddAdmin: (Admin) => void;
    AdminList: Admin[];
    SelectedAdmin: Admin[];
    onDeleteAll: () => void;
    onDeleteAdmin: (Admin) => void;
}

export const default_PMSuperAdmin: PMSuperAdmin = {};
