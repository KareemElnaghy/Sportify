import { PMSuperAdmin } from "@/PMs/Admins/SuperAdmin/SuperAdminPM";
import { Admin } from "@/Views/Components/Adminlist";
import AdminLogin from "@/types/Admin";

export interface SuperAdminModel {
  setup: () => Promise<void>;
  onSearchChange: () => void;
  onAddAdmin: () => void;
  onSelectAll: () => void;
  onSelectOne: () => void;
  admins: Admin[];
}

export function getSuperAdminModel(pm: PMSuperAdmin): SuperAdminModel {
  const model: SuperAdminModel = {
    setup: async () => {
      pm.pmSidebar.linkNames = [
        "Dashboard",
        "Admins",
        "Email",
        "Profile",
        "Settings",
      ];
      pm.pmSidebar.currentActive = 1;
      //test
      const dummyData = [
        {
          email: "alice.johnson@example.com",
          firstName: "Alice",
          lastName: "Johnson",
          passHash: "hashed_password_1",
          isSuper: false,
        },
        {
          email: "john.smith@example.com",
          firstName: "John",
          lastName: "Smith",
          passHash: "has12345tfds",
          isSuper: true,
        },
      ];

      // Set studentsData to the dummy data
      model.admins = dummyData;
      pm.adminslist = model.admins;

      model.admins = []; //API
      pm.onSearchChange = model.onSearchChange;
      pm.onAddAdmin = model.onAddAdmin;
      pm.onSelectAll = model.onSelectAll;
      pm.onSelectOne = model.onSelectOne;
      pm.admins = model.admins;
    },
    onSearchChange: () => {
      if (pm.Search !== "" && pm.Search !== null) {
        pm.admins = model.admins.filter((admin) =>
          admin.name.toLowerCase().includes(pm.Search.toLowerCase())
        );
      } else pm.admins = model.admins;
    },
    onAddAdmin: () => {
      //query to add Admin to DB
      //query to pull new admins or just add data
      //pm.admins = model.admins;
    },
    onSelectAll: () => {},
    onSelectOne: () => {},
    admins: [], // write API to get admins but get only certain data,
  };

  return model;
}
