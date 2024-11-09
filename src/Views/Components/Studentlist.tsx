// src/Views/Components/StudentList.tsx
import React from "react";
import "./StudentslistStyle.css";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";

interface Student {
  id: string;
  name: string;
  email: string;
  status: string;
  selected: boolean;
}

interface StudentListProps {
  students: Student[];
  selectAll: boolean;
  onSelectAll: (checked: boolean) => void;
  onSelectOne: (id: string, checked: boolean) => void;
  onToggleStatus: (id: string) => void;
}

export default function StudentList({
  students,
  selectAll,
  onSelectAll,
  onSelectOne,
  onToggleStatus,
}: StudentListProps) {
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
          <th>AUC Email</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>
              <input
                type="checkbox"
                checked={student.selected}
                onChange={(e) => onSelectOne(student.id, e.target.checked)}
              />
            </td>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.status}</td>
            <td>
              {/* Display both BAN and UNBAN buttons for each student */}
              <button
                className={`ban-btn ${
                  student.status === "Active" ? "" : "disabled"
                }`}
                onClick={() =>
                  student.status === "Active" && onToggleStatus("Banned")
                }
                disabled={student.status !== "Active"} // Disable BAN button when the student is already banned
              >
                BAN
              </button>
              <button
                className={`unban-btn ${
                  student.status === "Banned" ? "" : "disabled"
                }`}
                onClick={() =>
                  student.status === "Banned" && onToggleStatus("Active")
                }
                disabled={student.status !== "Banned"} // Disable UNBAN button when the student is not banned
              >
                UNBAN
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
