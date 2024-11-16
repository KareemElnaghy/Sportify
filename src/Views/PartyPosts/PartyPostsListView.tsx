import { PMPartyPostsList } from "@/PMs/PartyPosts/PartyPostsListPM";
import { useEffect } from "react";

import "./PartyPostsListStyle.css";
import Sidebar from "@/Views/Components/Sidebar";
import PartyPostsList from "@/Views/PartyPosts/Components/PartyPostsList";
import { getSidebarPM } from "@/PMs/Components/SidebarPM";
import Header from "@/Views/Components/Header";
import { getHeaderPM } from "@/PMs/Components/HeaderPM";

interface propsType {
	pm: PMPartyPostsList;
}

export default function PartyPostsListView({ pm }: propsType) {
	useEffect(() => {
		document.title = "Party Posts List";
	});

	useEffect(() => {
		queueMicrotask(() => {
			pm.currentSelection = Array(pm.partyPostsList.length).fill(false);
		});
	}, [pm.partyPostsList]);

	return (
		<div className="container">
			<Sidebar pm={getSidebarPM(pm)} />
			<div className="main-content">
				<Header pm={getHeaderPM(pm)} pageTitle="Party Posts List" />
				<PartyPostsList pm={pm} />
			</div>
		</div>
	);
}
