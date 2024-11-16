import prisma from "../prisma";
import Student from "@/types/Student";
import {
	StudentsListDTOExtractor,
	StudentsListDTOTransformer,
} from "./StudentsDTO";

interface getCourtsData {
	page: number;
	recordsPerPage: number;
	searchQuery: string | null;
}

export async function db_getStudents(data: getCourtsData): Promise<Student[]> {
	if (data.searchQuery == null) {
		const response = await prisma.student.findMany({
			skip: (data.page - 1) * data.recordsPerPage,
			take: data.recordsPerPage,
		});
		const responseDTO = StudentsListDTOExtractor(response);
		const result = StudentsListDTOTransformer(responseDTO);
		return result;
	}

	const response = await prisma.student.findMany({
		where: {
			OR: [
				{ first_name: { contains: data.searchQuery, mode: "insensitive" } },
				{ last_name: { contains: data.searchQuery, mode: "insensitive" } },
			],
		},
		orderBy: {
			first_name: "asc",
			last_name: "asc",
		},
		skip: (data.page - 1) * data.recordsPerPage,
		take: data.recordsPerPage,
	});
	const responseDTO = StudentsListDTOExtractor(response);
	const result = StudentsListDTOTransformer(responseDTO);
	return result;
}

export async function db_getStudentsSize(): Promise<number> {
	const response = await prisma.student.count();
	return response;
}
