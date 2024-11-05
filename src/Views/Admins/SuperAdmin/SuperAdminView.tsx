import { PMSuperAdmin } from "@/PMs/Admins/SuperAdmin/SuperAdminPM";

import "./SuperAdminStyle.css";
import Sidebar from "@/Views/Components/Sidebar";

interface propsType {
  pm: PMSuperAdmin;
}

export default function SuperAdminView({ pm }: propsType) {
  return (
    <div className="container">
      <Sidebar/>

      <div className="main-content">
        <header>
          <h2>Admins' List</h2>
		  <input type="text" placeholder="Search..." className="search-bar" />
        </header>

        <div className="top-bar">
		  <button className="add-admin-btn">ADD NEW ADMIN</button>
          <div className="pagination">
            <button>&lt;</button>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <button>&gt;</button>
          </div>
        </div>
		

        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Full Name</th>
              <th>AUC Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Seif Ashraf</td>
              <td>seif.ashraf@aucegypt.edu</td>
              <td>
                <button className="edit-btn">✏️</button>
                <button className="delete-btn">🗑️</button>
              </td>
            </tr>
            <tr>
			<td>
                <input type="checkbox" />
              </td>
			  <td>Ahmed Farouk</td>
              <td>ahmed.farouk@aucegypt.edu</td>
              <td>
                <button className="edit-btn">✏️</button>
                <button className="delete-btn">🗑️</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
