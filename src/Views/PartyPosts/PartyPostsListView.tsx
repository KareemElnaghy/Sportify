import "./PartyPostsListStyle.css";
import Sidebar from "../Components/Sidebar";
import { PMPartyPostsList } from "@/PMs/PartyPosts/PartyPostsListPM";

interface propsType {
	pm: PMPartyPostsList;
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

export default function PartyPostsListView({ pm }: propsType) {
    return (
        <div className = "container">
			<Sidebar menuItems={menuItems} activeItem={"Party Post List"} />
			<div className="main-content">
				<header>
					<h2 className = "title">Party Posts List</h2>
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
						<span>3</span>
						<span>4</span>
						<span>5</span>
						<span>6</span>
						<button>&gt;</button>
					</div>
         		</div>

				<table>
					<thead>
						<tr>
							<th>
							<input type="checkbox" />
							</th>
							<th>Sport Name</th>
							<th>Current Signups</th>
							<th>Max Limit</th>
							<th>Meeting Time</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<input type="checkbox" />
							</td>
							<td>Basketball</td>
							<td>5</td>
							<td>9</td>
							<td>8:00 pm</td>
							<td></td>						
						</tr>
						<tr>
							<td>
								<input type="checkbox" />
							</td>
							<td>Squash</td>
							<td>3</td>
							<td>10</td>
							<td>9:00 pm</td>
							<td></td>
						</tr>
						<tr>
							<td>
								<input type="checkbox" />
							</td>
							<td>Tennis</td>
							<td>6</td>
							<td>4</td>
							<td>5:00 pm</td>
							<td></td>
						</tr>
						<tr>
							<td>
								<input type="checkbox" />
							</td>
							<td>Basketball</td>
							<td>3</td>
							<td>11</td>
							<td>2:00 pm</td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
    );
}