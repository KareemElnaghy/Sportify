import { PMCourtsList } from "@/PMs/Courts/CourtsListPM";
import { useEffect } from "react";

import "./CourtsListStyle.css";
import Sidebar from "@/Views/Components/Sidebar";
import Header from "@/Views/Components/Header";
import Courtslist from "@/Views/Courts/Components/Courtslist";
import { getHeaderPM } from "@/PMs/Components/HeaderPM";
import { getSidebarPM } from "@/PMs/Components/SidebarPM";

interface propsType {
	pm: PMCourtsList;
}

export default function CourtsListView({ pm }: propsType) {
	useEffect(() => {
		pm.currentSelection = Array(pm.courtsList.length).fill(false);
	}, [pm.courtsList]);

	return (
		<div className="container">
			<Sidebar pm={getSidebarPM(pm)} />
			<div className="main-content">
				<Header pm={getHeaderPM(pm)} pageTitle={"Courts List"} />
				<Courtslist pm={pm} />
			</div>
		</div>
	);
}
