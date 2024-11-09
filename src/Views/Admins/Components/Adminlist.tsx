import React, { useEffect, useState } from "react";
import "./AdminlistStyle.css";
import { PMSuperAdmin } from "@/PMs/Admins/SuperAdmin/SuperAdminPM";
import Admin from "@/types/Admin";
import AdminListItem from "./AdminListItem";

interface AdminListProps {
  pm: PMSuperAdmin;
}
export default function AdminList({ pm }: AdminListProps) {
  const [selectAllCheckbox, setSelectAllCheckbox] = useState(false);

  useEffect(() => {
    const isAllSelected =
      pm.currentSelection.filter(Boolean).length == pm.adminslist.length;

    setSelectAllCheckbox(isAllSelected);
  }, [pm.currentSelection]);

  const handleSelectAll = (e: any) => {
    if (selectAllCheckbox) {
      pm.currentSelection = Array(pm.adminslist.length).fill(false);
    } else {
      pm.currentSelection = Array(pm.adminslist.length).fill(true);
    }

    setSelectAllCheckbox(e.target.checked);
  };
  const handleSelectionChange = (index: number, newVal: boolean) => {
    let newCurrentSelection = [...pm.currentSelection];
    newCurrentSelection[index] = newVal;
    pm.currentSelection = newCurrentSelection;

    pm.onSelectionChanged();
  };
  const handleDelete = (index: number) => {
    pm.ondeleteadmin();
  };
  return (
    <table>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              checked={selectAllCheckbox}
              onChange={handleSelectAll}
            />
          </th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {pm.adminslist.map((admin: Admin, index: number) => (
          <AdminListItem
            key={admin.email}
            admin={admin}
            selectionValue={pm.currentSelection[index]}
            onSelectionChange={(newVal) => {
              handleSelectionChange(index, newVal);
            }}
            onDeleteChange={() => handleDelete(index)}
          />
        ))}
      </tbody>
    </table>
  );
}
