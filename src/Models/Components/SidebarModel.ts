import { PMSidebar } from "@/PMs/Components/SidebarPM";

interface PageWithSidebar {
  pmSidebar: PMSidebar;
}

export interface SidebarModel {
  linkNames: string[];
  setup: () => Promise<void>;
  onLinkFollowed: (index: number) => void;
}

export function getSidebarModel<T extends PageWithSidebar>(
  pagePM: () => T,
  router: any,
  currentActive: number
): SidebarModel {
  const model: SidebarModel = {
    linkNames: [],
    setup: async () => {
      const newSidebarPM: PMSidebar = pagePM().pmSidebar;
      newSidebarPM.linkNames = [
        "Dashboard",
        "Students List",
        "Courts List",
        "Party Posts List",
        "Reservations List",
        "Email",
        "Settings",
        "Log Out"
      ];
      newSidebarPM.currentActive = currentActive;
      newSidebarPM.onLinkFollowed = model.onLinkFollowed;
      pagePM().pmSidebar = newSidebarPM;
    },
    onLinkFollowed: (index: number) => {
      // fill the routing
      switch (index) {
        case 0:
          router.push("/admin/superadmin");
          break;
        case 1:
          router.push("/admin/students");
          break;
        case 2:
          router.push("/admin/courts");
          break;
        case 3:
          router.push("/admin/partyposts");
          break;
      }
    },
  };

  return model;
}
