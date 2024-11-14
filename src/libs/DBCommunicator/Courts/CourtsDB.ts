import Court from "@/types/Court";
import prisma from "../prisma";
import { CourtsListDTOExtractor, CourtsListDTOTransformer } from "./CourtsDTO";

interface getCourtsData {
	page: number;
	recordsPerPage: number;
}

export async function db_getCourts(data: getCourtsData): Promise<Court[]> {
	const response = await prisma.court.findMany({
		skip: (data.page - 1) * data.recordsPerPage,
		take: data.recordsPerPage,
	});
	const responseDTO = CourtsListDTOExtractor(response);
	const result = CourtsListDTOTransformer(responseDTO);
	return result;
}
