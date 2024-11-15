import Court from "@/types/Court";
import { getCourts } from "@/libs/APICommunicator/Courts/CourtsAPI";
import { PMCourtsList } from "@/PMs/Courts/CourtsListPM";
import { PMSidebar } from "@/PMs/Components/SidebarPM";

interface PageWithSidebar {
	pmSidebar: PMSidebar;
}

export interface SidebarModel {
	linkNames: string[];
	setup: <T extends PageWithSidebar>(pm: T) => Promise<void>;
	getPM: () => PMSidebar;
	onLinkFollowed: (index: number) => void;
}

export function getSidebarModel(
	pm: PMSidebar,
	router: any,
	currentActive: number
): SidebarModel {
	const model: SidebarModel = {
		linkNames: [],
		setup: async (pm) => {
			pm.pmSidebar = model.getPM();
		},
		getPM: () => ({
			linkNames: [
				"Dashboard",
				"Students List",
				"Courts List",
				"Party Posts List",
				"Reservations List",
				"Email",
				"Settings",
			],

			currentActive: currentActive,

			onLinkFollowed: model.onLinkFollowed,
		}),
		onLinkFollowed: (index: number) => {
			// fill the routing
		},
	};

	return model;
}
