import { PMStudentList } from "@/PMs/Students/StudentsListPM";
import Image from 'next/image';

import "./StudentsListStyle.css";

interface propsType {
	pm: PMStudentList;
}

export default function StudentsListView({ pm }: propsType) 
{
	return(
		<div className = "container">
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
							Students List
						</a>
					</li>
					<li>
						<a href="#">Courts List</a>
					</li>
					<li>
						<a href="#">Party Post List</a>
					</li>
					<li>
						<a href="#">Reservations List</a>
					</li>
					<li>
						<a href="#">Settings</a>
					</li>
				</ul>
			</nav>

			<div className="main-content">
				<header>
					<h2 className = "title">Students' List</h2>
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
							<th>Status</th>
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
								<select>
									<option>Active</option>
									<option>Banned</option>
								</select>
							</td>
							<td>
								<button className="ban-btn">BAN</button>
								<button className="unban-btn">UNBAN</button>
							</td>
						</tr>
						<tr>
							<td>
								<input type="checkbox" />
							</td>
							<td>Ahmed Farouk</td>
							<td>ahmed.farouk@aucegypt.edu</td>
							<td>
								<select>
									<option>Active</option>
									<option>Banned</option>
								</select>
							</td>
							<td>
								<button className="ban-btn">BAN</button>
								<button className="unban-btn">UNBAN</button>
							</td>
						</tr>
						<tr>
							<td>
								<input type="checkbox" />
							</td>
							<td>Arwa Abdelkarim</td>
							<td>arwaabdelkarim@aucegypt.edu</td>
							<td>
								<select>
									<option>Active</option>
									<option>Banned</option>
								</select>
							</td>
							<td>
								<button className="ban-btn">BAN</button>
								<button className="unban-btn">UNBAN</button>
							</td>
						</tr>
						<tr>
							<td>
								<input type="checkbox" />
							</td>
							<td>Farida Bey</td>
							<td>Farida.bey@aucegypt.edu</td>
							<td>
								<select>
									<option>Active</option>
									<option>Banned</option>
								</select>
							</td>
							<td>
								<button className="ban-btn">BAN</button>
								<button className="unban-btn">UNBAN</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
