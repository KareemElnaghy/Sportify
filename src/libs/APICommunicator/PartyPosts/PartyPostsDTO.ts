import APIResponse from "@/types/APIResponse";
import PartyPost from "@/types/PartyPost";

interface PartyPostsListDTO {
	partyPostsCount: number;
	partyPostsList: PartyPost[];
}

export interface PartyPostsListData {
	partyPostsCount: number;
	partyPostsList: PartyPost[];
}

export const PartyPostsListDTOExtractor = (
	api_response: APIResponse<any>
): PartyPostsListDTO => {
	return api_response.result as PartyPostsListDTO;
};

export const PartyPostsListDTOTransformer = (
	dto_object: PartyPostsListDTO
): PartyPostsListData => {
	return dto_object;
};
