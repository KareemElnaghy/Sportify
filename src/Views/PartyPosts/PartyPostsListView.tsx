import "./PartyPostsListStyle.css";
import Sidebar from "../Components/Sidebar";
import { PMPartyPostsList } from "@/PMs/PartyPosts/PartyPostsListPM";
import PartyPostsList from "./Components/PartyPostsList";

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
		<div className="container">
			<Sidebar menuItems={menuItems} activeItem={"Party Post List"} />
			<div className="main-content">
				<header>
					<h2 className="title">Party Posts List</h2>
					<input type="text" placeholder="Search..." className="search-bar" />
				</header>

				<div className="top-bar">
					<label className="select-label">
						Number of Records &nbsp;
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

				<PartyPostsList postsList={pm.partyPostsList} />
			</div>
		</div>
	);
}
