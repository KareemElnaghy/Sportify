import PartyPost from "@/types/PartyPost";
import prisma from "../prisma";
import {
	PartyPostsListDTOExtractor,
	PartyPostsListDTOTransformer,
} from "./PartyPostsDTO";

interface getPartyPostsData {
	page: number;
	recordsPerPage: number;
	searchQuery: string | null;
}

export async function db_getPartyPost(
	data: getPartyPostsData
): Promise<PartyPost[]> {
	if (data.searchQuery == null) {
		const response = await prisma.partyPost.findMany({
			skip: (data.page - 1) * data.recordsPerPage,
			take: data.recordsPerPage,
		});
		const responseDTO = PartyPostsListDTOExtractor(response);
		const result = PartyPostsListDTOTransformer(responseDTO);
		return result;
	}

	const response = await prisma.partyPost.findMany({
		where: {
			OR: [{ event_name: { contains: data.searchQuery, mode: "insensitive" } }],
		},
		orderBy: {
			event_name: "asc",
		},
		skip: (data.page - 1) * data.recordsPerPage,
		take: data.recordsPerPage,
	});
	const responseDTO = PartyPostsListDTOExtractor(response);
	const result = PartyPostsListDTOTransformer(responseDTO);
	return result;
}

export async function db_getPartyPostsSize(): Promise<number> {
	const response = await prisma.partyPost.count();
	return response;
}
