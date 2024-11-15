import { PMCourtsList } from "@/PMs/Courts/CourtsListPM";
import { useEffect } from "react";

import "./CourtsListStyle.css";
import Sidebar from "@/Views/Components/Sidebar";
import Header from "@/Views/Components/Header";
import Courtslist from "@/Views/Courts/Components/Courtslist";

interface propsType {
	pm: PMCourtsList;
}

export default function CourtsListView({ pm }: propsType) {
	useEffect(() => {
		pm.currentSelection = Array(pm.courtsList.length).fill(false);
	}, [pm.courtsList]);

	return (
		<div className="container">
			<Sidebar pm={pm.pmSidebar} />
			<div className="main-content">
				<Header pm={pm.pmHeader} pageTitle={"Courts List"} />
				<Courtslist pm={pm} />
			</div>
		</div>
	);
}
