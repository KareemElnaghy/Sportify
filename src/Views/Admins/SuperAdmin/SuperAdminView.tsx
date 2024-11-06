import { PMSuperAdmin } from "@/PMs/Admins/SuperAdmin/SuperAdminPM";
import "./SuperAdminStyle.css";
import Sidebar from "@/Views/Components/Sidebar";
import AdminList from "@/Views/Components/Adminlist";
import AddAdmin from "@/Views/Components/AddAdmin";
import { useState } from "react";

interface propsType {
  pm: PMSuperAdmin;
}

export default function SuperAdminView({ pm }: propsType) {
  const [admins, setAdmins] = useState([
    {
      id: "1",
      name: "Seif Ashraf",
      email: "seif.ashraf@aucegypt.edu",
      selected: false,
    },
    {
      id: "2",
      name: "Ahmed Farouk",
      email: "ahmed.farouk@aucegypt.edu",
      selected: false,
    },
  ]);

  // Handlers for AdminList
  const handleSelectAll = (checked: boolean) => {
    setAdmins(admins.map((admin) => ({ ...admin, selected: checked })));
    pm.onSelectAll();
  };

  const handleSelectOne = (id: string, checked: boolean) => {
    setAdmins(
      admins.map((admin) =>
        admin.id === id ? { ...admin, selected: checked } : admin
      )
    );
    pm.onSelectOne();
  };

  const handleEditAdmin = (id: string) => {};

  const handleDeleteAdmin = (id: string) => {};

  const menuItems = [
    { name: "Dashboard", href: "#" },
    { name: "Admins", href: "#" },
    { name: "Email", href: "#" },
    { name: "Profile", href: "#" },
    { name: "Settings", href: "#" },
  ];

  return (
    <div className="container">
      <Sidebar menuItems={menuItems} activeItem="Admins" />
      <div className="main-content">
        <header>
          <h2>Admins' List</h2>
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
          <button className="add-admin-btn" onClick={pm.onAddAdmin}>
            ADD NEW ADMIN +{" "}
          </button>
          <div className="pagination">
            <button>&lt;</button>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <button>&gt;</button>
          </div>
        </div>

        <AdminList
          admins={admins}
          selectAll={pm.selectAll}
          onSelectAll={handleSelectAll}
          onSelectOne={handleSelectOne}
          onEditAdmin={handleEditAdmin}
          onDeleteAdmin={handleDeleteAdmin}
        />
      </div>
    </div>
  );
}
