export interface PMSidebar {
	linkNames: string[];
	currentActive: number;
	onLinkFollowed: (index: number) => void;
}

export const default_PMSidebar: PMSidebar = {
	linkNames: [],
	currentActive: 0,
	onLinkFollowed: (index: number) => {},
};
