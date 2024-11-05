import Student from "@/types/Student";
import { getCourts } from "@/libs/APICommunicator/Courts/CourtsAPI";
import { PMStudentList } from "@/PMs/Students/StudentsListPagePM";

export interface StudentsListModel {
	studentsData: Student[];
	setup: () => Promise<void>;
}

export function getModel(pm: PMStudentList): StudentsListModel {
	const model: StudentsListModel = {
		studentsData: [],
		setup: async () => {
			// let studentsList: Student[] = await getCourts({ page: 5 });
			// model.studentsData = studentsList;
			// setTimeout(() => {
			// 	// set the useState
			// 	pm.studentsList = model.studentsData;
			// }, 1000);
		},
	};

	return model;
}
