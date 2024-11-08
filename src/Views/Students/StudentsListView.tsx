import { PMStudentList } from "@/PMs/Students/StudentsListPM";
import Sidebar from "@/Views/Components/Sidebar";
import StudentList from "@/Views/Components/Studentlist";
import { useState } from "react";

import "./StudentsListStyle.css";

interface propsType {
	pm: PMStudentList;
}

export default function StudentsListView({ pm }: propsType) {
	const menuItems = [
		{ name: "Dashboard", href: "#" },
		{ name: "Students List", href: "#" },
		{ name: "Courts List", href: "#" },
		{ name: "Party Post List", href: "#" },
		{ name: "Reservations List", href: "#" },
		{ name: "Settings", href: "#" },
	];
	const [students, setStudents] = useState([
		{
			id: "1",
			name: "Seif Ashraf",
			email: "seif.ashraf@aucegypt.edu",
			status: "Banned",
			selected: false,
		},
		{
			id: "2",
			name: "Ahmed Farouk",
			email: "ahmed.farouk@aucegypt.edu",
			status: "Active",
			selected: false,
		},
	]);

	// State to manage selection and pagination
	const [selectAll, setSelectAll] = useState(false);

	const handleSelectAll = (checked: boolean) => {
		setStudents(students.map((student) => ({ ...student, selected: checked })));
		pm.onSelectAll();
	};

	const handleSelectOne = (id: string, checked: boolean) => {
		setStudents(
			students.map((student) =>
				student.id === id ? { ...student, selected: checked } : student
			)
		);
		pm.onSelectOne();
	};

	const handleToggleStatus = (id: string) => {
		// Handle banning/unbanning logic here
	};

	return (
		<div className="container">
			<Sidebar menuItems={menuItems} activeItem="Students List" />
			<div className="main-content">
				<header>
					<h2 className="title">Students' List</h2>
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
				<StudentList
					students={students}
					selectAll={selectAll}
					onSelectAll={handleSelectAll}
					onSelectOne={handleSelectOne}
					onToggleStatus={handleToggleStatus}
				/>
			</div>
		</div>
	);
}
