import Image from "next/image";
import "./SidebarStyle.css";


export default function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="logo">
        <Image src="/Sportify.png" alt="Logo" width={100} height={100} />
      </div>
      <ul>
        <li>
          <a href="#">Dashboard</a>
        </li>
        <li>
          <a href="#" className="active">
            Admins
          </a>
        </li>
        <li>
          <a href="#">Email</a>
        </li>
        <li>
          <a href="#">Profile</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
      </ul>
    </nav>
  );
}
