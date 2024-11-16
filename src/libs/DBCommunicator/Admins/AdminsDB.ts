import Admin from "@/types/Admin";
import prisma from "../prisma";
import { AdminsListDTOExtractor, AdminsListDTOTransformer } from "./AdminsDTO";

interface getAminsData {
	page: number;
	recordsPerPage: number;
	searchQuery: string | null;
}

export async function db_getAdmins(data: getAminsData): Promise<Admin[]> {
	if (data.searchQuery == null) {
		const response = await prisma.admin.findMany({
			skip: (data.page - 1) * data.recordsPerPage,
			take: data.recordsPerPage,
		});
		const responseDTO = AdminsListDTOExtractor(response);
		const result = AdminsListDTOTransformer(responseDTO);
		return result;
	}

	const response = await prisma.admin.findMany({
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
	const responseDTO = AdminsListDTOExtractor(response);
	const result = AdminsListDTOTransformer(responseDTO);
	return result;
}

export async function db_getAdminsSize(): Promise<number> {
	const response = await prisma.admin.count();
	return response;
}
