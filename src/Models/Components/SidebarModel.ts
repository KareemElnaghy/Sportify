import Court from "@/types/Court";
import { getCourts } from "@/libs/APICommunicator/Courts/CourtsAPI";
import { PMCourtsList } from "@/PMs/Courts/CourtsListPM";
import { PMSidebar } from "@/PMs/Components/SidebarPM";

export interface SidebarModel {
	linkNames: string[];
	setup: () => Promise<void>;

	onLinkFollowed: (index: number) => void;
}

export function getSidebarModel(
	pm: PMSidebar,
	router: any,
	currentActive: number
): SidebarModel {
	const model: SidebarModel = {
		linkNames: [],
		setup: async () => {
			pm.linkNames = [
				"Dashboard",
				"Students List",
				"Courts List",
				"Party Posts List",
				"Reservations List",
				"Email",
				"Settings",
			];
			pm.currentActive = currentActive;
			pm.onLinkFollowed = model.onLinkFollowed;
		},
		onLinkFollowed: (index: number) => {
			// fill the routing
		},
	};

	return model;
}
