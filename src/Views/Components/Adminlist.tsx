// src/Views/Components/AdminList.tsx
import React from "react";
import "./AdminlistStyle.css";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";

export interface Admin {
  id: string;
  name: string;
  email: string;
  selected: boolean;
}

interface AdminListProps {
  admins: Admin[];
  selectAll: boolean;
  onSelectAll: (checked: boolean) => void;
  onSelectOne: (id: string, checked: boolean) => void;
  onEditAdmin: (id: string) => void;
  onDeleteAdmin: (id: string) => void;
}

export default function AdminList({
  admins,
  selectAll,
  onSelectAll,
  onSelectOne,
  onEditAdmin,
  onDeleteAdmin,
}: AdminListProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              checked={selectAll}
              onChange={(e) => onSelectAll(e.target.checked)}
            />
          </th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {admins.map((admin) => (
          <tr key={admin.id}>
            <td>
              <input
                type="checkbox"
                checked={admin.selected}
                onChange={(e) => onSelectOne(admin.id, e.target.checked)}
              />
            </td>
            <td>{admin.name}</td>
            <td>{admin.email}</td>
            <td>
              <button
                className="edit-btn"
                onClick={() => onEditAdmin(admin.id)}
              >
                <BiEdit />
              </button>
              <button
                className="delete-btn"
                onClick={() => onDeleteAdmin(admin.id)}
              >
                <MdDelete />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
