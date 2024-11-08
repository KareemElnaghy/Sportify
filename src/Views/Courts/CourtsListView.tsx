import { PMCourtsList } from "@/PMs/Courts/CourtsListPM";
import { useEffect } from "react";

import "./CourtsListStyle.css";
import Sidebar from "../Components/Sidebar";
import Courtslist from "./Components/Courtslist";

interface propsType {
	pm: PMCourtsList;
}

export default function CourtsListView({ pm }: propsType) {
	// State to manage selection and pagination

	// const handleToggleStatus = (id: number) => {
	// 	setCourts(
	// 		courts.map((court) =>
	// 			court.id === id
	// 				? {
	// 						...court,
	// 						status:
	// 							court.status === "Available" ? "Unavailable" : "Available",
	// 				  }
	// 				: court
	// 		)
	// 	);
	// };

	useEffect(() => {
		pm.currentSelection = Array(pm.courtsList.length).fill(false);
	}, [pm.courtsList]);

	return (
		<div className="container">
			<Sidebar pm={pm.pmSidebar} />
			<div className="main-content">
				<header>
					<h2 className="title">Courts List</h2>
					<input
						type="text"
						placeholder="Search..."
						className="search-bar"
						// value={pm.Search}
						// onChange={(e) => {
						// 	pm.Search = e.target.value;
						// 	pm.onSearchChange();
						// }}
					/>
				</header>
				<div className="top-bar">
					<label className="select-label">
						Number of Records &nbsp;
						<select
							className="select-page"
							// value={pm.records}
							// onChange={pm.onRecordsChange}
						>
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
						<button>&gt;</button>
					</div>
				</div>
				<Courtslist pm={pm} />
			</div>
		</div>
	);
}
