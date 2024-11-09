import Admin from "@/types/Admin";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";

interface AdminListItemProps {
  admin: Admin;
  selectionValue: boolean;
  onSelectionChange: (val: boolean) => void;
}

export default function AdminListItem({
  admin,
  selectionValue,
  onSelectionChange,
}: AdminListItemProps) {
  return (
    <tr key={admin.email}>
      <td>
        <input
          type="checkbox"
          checked={Boolean(selectionValue)}
          onChange={(e) => {
            onSelectionChange(e.target.checked);
          }}
        />
      </td>
      <td>{admin.firstName}</td>
      <td>{admin.lastName}</td>
      <td>
        <button className="edit-btn">
          <BiEdit />
        </button>
        <button className="delete-btn">
          <MdDelete />
        </button>
      </td>
    </tr>
  );
}
