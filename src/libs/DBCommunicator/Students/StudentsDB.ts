import prisma from "../prisma";
import Student from "@/types/Student";
import {
	StudentsListDTOExtractor,
	StudentsListDTOTransformer,
} from "./StudentsDTO";

interface getCourtsData {
	page: number;
}

const StudentsPerPage = 50;
export async function db_getStudents(data: getCourtsData): Promise<Student[]> {
	const response = await prisma.student.findMany({
		skip: (data.page - 1) * StudentsPerPage,
		take: StudentsPerPage,
	});
	const responseDTO = StudentsListDTOExtractor(response);
	const result = StudentsListDTOTransformer(responseDTO);
	return result;
}
