import Student from "@/types/Student";
import { getCourts } from "@/libs/APICommunicator/Courts/CourtsAPI";
import { PMStudentList } from "@/PMs/Students/StudentsListPM";

export interface StudentsListModel {
	studentsData: Student[];
	setup: () => Promise<void>;
}

export function getStudentListModel(
	pm: () => PMStudentList
): StudentsListModel {
	const model: StudentsListModel = {
		studentsData: [],
		setup: async () => {
			pm().pmSidebar.linkNames = [
				"Dashboard",
				"Students List",
				"Courts List",
				"Party Posts List",
				"Reservations List",
				"Email",
				"Settings",
			];
			pm().pmSidebar.currentActive = 1;
			// let studentsList: Student[] = await getCourts({ page: 5 });
			// model.studentsData = studentsList;
			// setTimeout(() => {
			// 	// set the useState
			// 	pm.studentsList = model.studentsData;
			// }, 1000);

			//test
			const dummyData = [
				{
					email: "alice.johnson@example.com",
					firstName: "Alice",
					lastName: "Johnson",
					photoLink: null,
					isTrainer: false,
					phoneNumber: "123-456-7890",
					passHash: "hashed_password_1",
					isBanned: false,
				},
				{
					email: "bob.smith@example.com",
					firstName: "Bob",
					lastName: "Smith",
					photoLink: null,
					isTrainer: true,
					phoneNumber: "234-567-8901",
					passHash: "hashed_password_2",
					isBanned: false,
				},
				{
					email: "charlie.brown@example.com",
					firstName: "Charlie",
					lastName: "Brown",
					photoLink: null,
					isTrainer: false,
					phoneNumber: "345-678-9012",
					passHash: "hashed_password_3",
					isBanned: false,
				},
				{
					email: "diana.prince@example.com",
					firstName: "Diana",
					lastName: "Prince",
					photoLink: null,
					isTrainer: true,
					phoneNumber: "456-789-0123",
					passHash: "hashed_password_4",
					isBanned: true,
				},
				{
					email: "ethan.hunt@example.com",
					firstName: "Ethan",
					lastName: "Hunt",
					photoLink: null,
					isTrainer: false,
					phoneNumber: "567-890-1234",
					passHash: "hashed_password_5",
					isBanned: false,
				},
			];

			// Set studentsData to the dummy data
			model.studentsData = dummyData;
			pm().studentsList = model.studentsData;
		},
	};

	return model;
}
