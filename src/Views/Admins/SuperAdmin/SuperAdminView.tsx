import { PMSuperAdmin } from "@/PMs/Admins/SuperAdmin/SuperAdminPM";
import { useEffect, useState } from "react";

import "./SuperAdminStyle.css";
import Sidebar from "@/Views/Components/Sidebar";
import AdminList from "@/Views/Admins/SuperAdmin/Components/AdminList";
import AddAdminForm, {
	newAdminData,
} from "@/Views/Admins/SuperAdmin/Components/AddAdmin";
import Header from "@/Views/Components/Header";
import { getSidebarPM } from "@/PMs/Components/SidebarPM";

interface propsType {
	pm: PMSuperAdmin;
}

export default function SuperAdminView({ pm }: propsType) {
	useEffect(() => {
		document.title = "Admins List";
	});

	const [isAddAdminPopupOpen, setIsAddAdminPopupOpen] = useState(false);
	useEffect(() => {
		pm.currentSelection = Array(pm.adminslist.length).fill(false);
	}, [pm.adminslist]);

	return (
		<div className="container">
			<Sidebar pm={getSidebarPM(pm)} />
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
				<Header pm={pm.pmHeader} pageTitle={"Admins List"} />
				<button
					className="add-admin-btn"
					onClick={() => {
						setIsAddAdminPopupOpen(true);
					}}
				>
					ADD NEW ADMIN +{" "}
				</button>
				<AdminList pm={pm} />
			</div>
		</div>
	);
}
