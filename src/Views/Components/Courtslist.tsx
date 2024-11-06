import React, { useState } from "react";
import "./CourtsListStyle.css";

interface Court {
  id: number;
  name: string;
  details: string;
  selected: boolean;
}

interface CourtsListProps {
  courts: Court[];
  onToggleCourtStatus: (id: string) => void;
  onSelectAll: (checked: boolean) => void;
  onSelectCourt: (id: string, checked: boolean) => void;
}

const CourtsList: React.FC<CourtsListProps> = ({
  courts,
  onToggleCourtStatus,
  onSelectAll,
  onSelectCourt,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSelectAll(e.target.checked);
  };

  const handleSelectCourt = (
    id: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    onSelectCourt(id, e.target.checked);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" onChange={handleSelectAll} />
          </th>
          <th>Court Name</th>
          <th>Court Details</th>
          <th>Edit Court</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {courts.map((court) => (
          <tr key={court.id}>
            <td>
            </td>
            <td>{court.name}</td>
            <td>
              <button className="view-btn">View</button>
            </td>
            <td>
              <button className="edit-btn">Edit</button>
            </td>
            <td>
              <label className="switch">
                <span className="slider round"></span>
              </label>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CourtsList;
