"use client";

import { useStateObject } from "@/hooks/useStateObject";
import { useMemo } from "react";
import PartyPostsListView from "@/Views/PartyPosts/PartyPostsListView";
import {
	default_PMPartyPostsList,
	PMPartyPostsList,
} from "@/PMs/PartyPosts/PartyPostsListPM";
import { getPartyPostsListModel } from "@/Models/PartyPosts/PartyPostsListModel";
import { useRouter } from "next/navigation";

export default function PartyPostsListPage() {
	const router = useRouter();
	const { obj: pm, ref: pmRef } = useStateObject<PMPartyPostsList>(
		default_PMPartyPostsList
	);
	const model = useMemo(() => {
		const model = getPartyPostsListModel(pmRef, router);
		model.setup();
		return model;
	}, []);

	return <PartyPostsListView pm={pm} />;
}
