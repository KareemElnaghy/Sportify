import Court from "@/types/Court";
import prisma from "../prisma";
import { CourtsListDTOExtractor, CourtsListDTOTransformer } from "./CourtsDTO";

interface getCourtsData {
	page: number;
}

const CourtsPerPage = 50;
export async function db_getCourts(data: getCourtsData): Promise<Court[]> {
	const response = await prisma.court.findMany({
		skip: (data.page - 1) * 50,
		take: 50,
	});
	const responseDTO = CourtsListDTOExtractor(response);
	const result = CourtsListDTOTransformer(responseDTO);
	return result;
}
