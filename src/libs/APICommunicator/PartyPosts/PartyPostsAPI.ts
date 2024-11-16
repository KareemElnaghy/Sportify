import { APIConnector } from "../APIConnector";
import {
	PartyPostsListData,
	PartyPostsListDTOExtractor,
	PartyPostsListDTOTransformer,
} from "./PartyPostsDTO";

interface getPartyPostsData {
	page: number;
	recordsPerPage: number;
	searchQuery: string;
}
export async function getPartyPosts(
	data: getPartyPostsData
): Promise<PartyPostsListData> {
	const response = await APIConnector.get("/api/partyPosts/list", {
		page: `${data.page}`,
		recordsPerPage: `${data.recordsPerPage}`,
		...(data.searchQuery != "" && { searchQuery: data.searchQuery }), // optional param only added if not empty
	});
	console.log(response);
	const responseDTO = PartyPostsListDTOExtractor(response);
	const result = PartyPostsListDTOTransformer(responseDTO);
	return result;
}
