import Court from "@/types/Court";
import prisma from "../prisma";
import { CourtsListDTOExtractor, CourtsListDTOTransformer } from "./CourtsDTO";

interface getCourtsData {
	page: number;
	recordsPerPage: number;
	searchQuery: string | null;
}

export async function db_getCourts(data: getCourtsData): Promise<Court[]> {
	if (data.searchQuery == null) {
		const response = await prisma.court.findMany({
			skip: (data.page - 1) * data.recordsPerPage,
			take: data.recordsPerPage,
		});
		const responseDTO = CourtsListDTOExtractor(response);
		const result = CourtsListDTOTransformer(responseDTO);
		return result;
	}

	const response = await prisma.court.findMany({
		where: {
			OR: [
				{ name: { contains: data.searchQuery, mode: "insensitive" } },
				// { description: { contains: data.searchQuery, mode: "insensitive" } },
				// { sport: { contains: data.searchQuery, mode: "insensitive" } },
				// { location: { contains: data.searchQuery, mode: "insensitive" } },
			],
		},
		orderBy: {
			name: "asc",
		},
		skip: (data.page - 1) * data.recordsPerPage,
		take: data.recordsPerPage,
	});
	const responseDTO = CourtsListDTOExtractor(response);
	const result = CourtsListDTOTransformer(responseDTO);
	return result;
}

export async function db_getCourtsSize(): Promise<number> {
	const response = await prisma.court.count();
	return response;
}
