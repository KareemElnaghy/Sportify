import CourtsListItem from "@/Views/Courts/Components/CourtsListItem";
import { PMCourtsList } from "@/PMs/Courts/CourtsListPM";
import { useEffect, useState } from "react";

import "./CourtsListStyle.css";
import Sidebar from "../Components/Sidebar";
import Courtslist from "../Components/Courtslist";
import Court from "@/types/Court";

interface propsType {
	pm: PMCourtsList;
}

export default function CourtsListView({ pm }: propsType) {
	const menuItems = [
		{ name: "Dashboard", href: "#" },
		{ name: "Students List", href: "#" },
		{ name: "Courts List", href: "#" },
		{ name: "Party Post List", href: "#" },
		{ name: "Reservations List", href: "#" },
		{ name: "Email", href: "#" },
		{ name: "Settings", href: "#" },
	];
	const [courts, setCourts] = useState<Court[]>([]);
	useEffect(() => {
		setCourts(pm.getCourts());
	}, [pm.courtsList]);

	// State to manage selection and pagination
	const [selectAll, setSelectAll] = useState(false);

	const handleSelectAll = (checked: boolean) => {
		setCourts(courts.map((court) => ({ ...court, selected: checked })));
		pm.onSelectAll();
	};

	const handleSelectOne = (id: number, checked: boolean) => {
		setCourts(
			courts.map((court) =>
				court.id === id ? { ...court, selected: checked } : court
			)
		);
		pm.onSelectOne();
	};

	const handleToggleStatus = (id: number) => {
		setCourts(
			courts.map((court) =>
				court.id === id
					? {
							...court,
							status:
								court.status === "Available" ? "Unavailable" : "Available",
					  }
					: court
			)
		);
	};

	return (
		// <div>
		// 	<div>{pm.username}</div>
		// 	{pm.courtsList.map((c: Court, index: number) => (
		// 		<CourtsListItem key={c.id} court={c} />
		// 	))}
		// 	<button onClick={pm.filterCourts}>click me</button>
		// </div>
		<div className="container">
			<Sidebar menuItems={menuItems} activeItem={"Courts List"} />
			<div className="main-content">
				<header>
					<h2 className="title">Courts List</h2>
					<input
						type="text"
						placeholder="Search..."
						className="search-bar"
						value={pm.Search}
						onChange={(e) => {
							pm.Search = e.target.value;
							pm.onSearchChange();
						}}
					/>
				</header>
				<div className="top-bar">
					<label className="select-label">
						Number of Records &nbsp;
						<select
							className="select-page"
							value={pm.records}
							onChange={pm.onRecordsChange}
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
				<Courtslist
					courts={courts}
					selectAll={selectAll}
					onSelectAll={handleSelectAll}
					onSelectOne={handleSelectOne}
					onToggleStatus={handleToggleStatus}
				/>
			</div>
		</div>
	);
}
