import React, { useState } from "react";
import "./CourtsListStyle.css";
import { PMCourtsList } from "@/PMs/Courts/CourtsListPM";
import Court from "@/types/Court";

interface CourtsListProps {
	pm: PMCourtsList;
}

export default function CourtsList({ pm }: CourtsListProps) {
	const [selectAllCheckbox, setSelectAllCheckbox] = useState(false);

	const handleSelectAll = (e: any) => {
		if (selectAllCheckbox) {
			pm.currentSelection = Array(pm.courtsList.length).fill(false);
		} else {
			pm.currentSelection = Array(pm.courtsList.length).fill(true);
		}

		setSelectAllCheckbox(e.target.checked);
	};

	const handleSelectionChange = (newVal: boolean, index: number) => {
		let newCurrentSelection = [...pm.currentSelection];
		newCurrentSelection[index] = newVal;
		pm.currentSelection = newCurrentSelection;

		const isAllSelected =
			newCurrentSelection.filter(Boolean).length == pm.courtsList.length;

		setSelectAllCheckbox(isAllSelected);
		pm.onSelectionChanged();
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
					<th>Court Name</th>
					<th>Court Details</th>
					<th>Edit Court</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{pm.courtsList.map((court: Court, index: number) => (
					<tr key={court.id}>
						<td>
							<input
								type="checkbox"
								checked={pm.currentSelection[index]}
								onChange={(e) => {
									handleSelectionChange(e.target.checked, index);
								}}
							/>
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
}
