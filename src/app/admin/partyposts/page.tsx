"use client";

import { useStateObject } from "@/hooks/useStateObject";
import { useMemo } from "react";
import PartyPostsListView from "@/Views/PartyPosts/PartyPostsListView";
import { default_PMPartyPostsList, 
		PMPartyPostsList } from "@/PMs/PartyPosts/PartyPostsListPM";
import { getPartyPostsListModel } from "@/Models/PartyPosts/PartyPostsListModel";

export default function PartyPostsListPage() {
	const pm = useStateObject<PMPartyPostsList>(default_PMPartyPostsList);
	const model = useMemo(() => {
		const model = getPartyPostsListModel(pm);
		model.setup();
		return model;
	}, []);

	return <PartyPostsListView pm={pm} />;
}