import Image from "next/image";
import "./SidebarStyle.css";

interface SidebarProps {
  menuItems: { name: string; href: string }[]; // Array of menu items
  activeItem: string; // Name of the currently active item
}

export default function Sidebar({ menuItems, activeItem }: SidebarProps) {
  return (
    <nav className="sidebar">
      <div className="logo">
        <Image src="/Sportify.png" alt="Logo" width={100} height={100} />
      </div>
      <ul>
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={item.name === activeItem ? "active" : ""}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
