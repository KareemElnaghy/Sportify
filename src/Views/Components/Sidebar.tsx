import Image from "next/image";
import "./SidebarStyle.css";
import { PMSidebar } from "@/PMs/Components/SidebarPM";

interface SidebarProps {
	pm: PMSidebar;
}

export default function Sidebar({ pm }: SidebarProps) {
	return (
		<nav className="sidebar">
			<div className="logo">
				<Image src="/Sportify.png" alt="Logo" width={100} height={100} />
			</div>
			<ul>
				{pm.linkNames.map((linkName, index) => (
					<li
						key={linkName}
						className={index == pm.currentActive ? "active" : ""}
						onClick={(e) => {
							pm.onLinkFollowed(index);
						}}
					>
						{linkName}
					</li>
				))}
			</ul>
		</nav>
	);
}
