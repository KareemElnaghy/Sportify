import { PMSuperAdmin } from "@/PMs/Admins/SuperAdmin/SuperAdminPM";
import { useEffect, useState } from "react";

import "./SuperAdminStyle.css";
import Sidebar from "@/Views/Components/Sidebar";
import AdminList from "@/Views/Admins/SuperAdmin/Components/AdminList";
import AddAdminForm, {
	newAdminData,
} from "@/Views/Admins/SuperAdmin/Components/AddAdmin";

interface propsType {
	pm: PMSuperAdmin;
}

export default function SuperAdminView({ pm }: propsType) {
	const [isAddAdminPopupOpen, setIsAddAdminPopupOpen] = useState(false);
	useEffect(() => {
		pm.currentSelection = Array(pm.adminslist.length).fill(false);
	}, [pm.adminslist]);

	return (
		<div className="container">
			<Sidebar pm={pm.pmSidebar} />
			{isAddAdminPopupOpen && (
				<AddAdminForm
					onClose={() => {
						setIsAddAdminPopupOpen(false);
					}}
					onSubmit={async (adminData: newAdminData) => {
						// pm.onAddAdmin();
					}}
				/>
			)}
			<div className="main-content">
				<header>
					<h2 className="title">Admins List</h2>
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
					<button
						className="add-admin-btn"
						onClick={() => {
							setIsAddAdminPopupOpen(true);
						}}
					>
						ADD NEW ADMIN +{" "}
					</button>
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
				<AdminList pm={pm} />
			</div>
		</div>
	);
}
