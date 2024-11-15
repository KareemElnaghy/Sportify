import { PMPartyPostsList } from "@/PMs/PartyPosts/PartyPostsListPM";
import { useEffect } from "react";

import "./PartyPostsListStyle.css";
import Sidebar from "../Components/Sidebar";
import PartyPostsList from "./Components/PartyPostsList";
import { getSidebarPM } from "@/PMs/Components/SidebarPM";

interface propsType {
	pm: PMPartyPostsList;
}

export default function PartyPostsListView({ pm }: propsType) {
	useEffect(() => {
		document.title = "Party Posts List";
	});

	useEffect(() => {
		pm.currentSelection = Array(pm.partyPostsList.length).fill(false);
	}, [pm.partyPostsList]);

	return (
		<div className="container">
			<Sidebar pm={getSidebarPM(pm)} />
			<div className="main-content">
				<header>
					<h2 className="title">Party Posts List</h2>
					<input type="text" placeholder="Search..." className="search-bar" />
				</header>

				<div className="top-bar">
					<label className="select-label">
						Number of Records &nbsp;
						<select className="select-page">
							<option>10</option>
							<option>25</option>
							<option>50</option>
							<option>100</option>
						</select>
					</label>
					<div className="pagination">
						<button>&lt;</button>
						<span>1</span>
						<span>2</span>
						<span>3</span>
						<span>4</span>
						<span>5</span>
						<span>6</span>
						<button>&gt;</button>
					</div>
				</div>

				<PartyPostsList pm={pm} />
			</div>
		</div>
	);
}
