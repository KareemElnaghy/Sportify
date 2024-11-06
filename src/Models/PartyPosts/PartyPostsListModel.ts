import { PMPartyPostsList } from "@/PMs/PartyPosts/PartyPostsListPM";

export interface PartyPostsListModel {
	setup: () => Promise<void>;
}

export function getPartyPostsListModel(pm: PMPartyPostsList): PartyPostsListModel {
	const model: PartyPostsListModel = {
		setup: async () => {
			
		},
	};

	return model;
}
