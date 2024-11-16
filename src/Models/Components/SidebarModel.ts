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
			];
			newSidebarPM.currentActive = currentActive;
			newSidebarPM.onLinkFollowed = model.onLinkFollowed;
			pagePM().pmSidebar = newSidebarPM;
		},
		onLinkFollowed: (index: number) => {
			// fill the routing
		},
	};

	return model;
}
