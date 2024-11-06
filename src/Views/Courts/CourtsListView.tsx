import CourtsListItem from "@/Views/Courts/Components/CourtsListItem";
import { PMCourtsList } from "@/PMs/Courts/CourtsListPM";
import Court from "@/types/Court";

import "./CourtsListStyle.css";
import Sidebar from "../Components/Sidebar";

interface propsType {
	pm: PMCourtsList;
}

const menuItems = [
    { name: "Dashboard", href: "#" },
    { name: "Students List", href: "#" },
    { name: "Courts List", href: "#" },
    { name: "Party Post List", href: "#" },
	{ name: "Reservations List", href: "#" },
	{ name: "Email", href: "#" },
    { name: "Settings", href: "#" },
  ];
export default function CourtsListView({ pm }: propsType) {
	return (
		// <div>
		// 	<div>{pm.username}</div>
		// 	{pm.courtsList.map((c: Court, index: number) => (
		// 		<CourtsListItem key={c.id} court={c} />
		// 	))}
		// 	<button onClick={pm.filterCourts}>click me</button>
		// </div>
		<div className = "container">
			<Sidebar menuItems={menuItems} activeItem={"Courts List"} />
			<div className="main-content">
				<header>
					<h2 className = "title">Courts List</h2>
					<input type="text" placeholder="Search..." className="search-bar" />
				</header>
				
				<div className="top-bar">
					<label className="select-label">Number of Records &nbsp;  
						<select className="select-page">
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
						<button>&gt;</button>
					</div>
         		</div>

				<table>
					<thead>
						<tr>
							<th>
							<input type="checkbox" />
							</th>
							<th>Court Name</th>
							<th>Court Details</th>
							<th>Edit Court</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<input type="checkbox" />
							</td>
							<td>Artoc Court</td>
							<td>
								<button className = "View"> View </button>
							</td>
							<td>
								<button className = "View"> View </button>
							</td>
							<td className="available">available</td>
							<td><label className="switch">
									<input type="checkbox" />
									<span className="slider round"></span>
								</label>
  							</td>						</tr>
						<tr>
							<td>
								<input type="checkbox" />
							</td>
							<td>Rashidi Court</td>
							<td>
								<button className = "View"> View </button>
							</td>
							<td>
								<button className = "View"> View </button>
							</td>
							<td className="unavailable">unavailable</td>
							<td><label className="switch">
									<input type="checkbox" />
									<span className="slider round"></span>
								</label>
  							</td>						</tr>
						<tr>
							<td>
								<input type="checkbox" />
							</td>
							<td>Squash Court 1</td>
							<td>
								<button className = "View"> View </button>
							</td>
							<td>
								<button className = "View"> View </button>
							</td>
							<td className="available">available</td>
							<td><label className="switch">
									<input type="checkbox" />
									<span className="slider round"></span>
								</label>
  							</td>						</tr>
						<tr>
							<td>
								<input type="checkbox" />
							</td>
							<td>Squash Court 1</td>
							<td>
								<button className = "View"> View </button>
							</td>
							<td>
								<button className = "View"> View </button>
							</td>
							<td className="unavailable">unavailable</td>
							<td><label className="switch">
									<input type="checkbox" />
									<span className="slider round"></span>
								</label>
  							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
