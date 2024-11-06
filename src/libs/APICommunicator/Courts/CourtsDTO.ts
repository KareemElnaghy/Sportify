import APIResponse from "@/types/APIResponse";
import Court from "@/types/Court";

type CourtDTO = Court;

export const CourtsListDTOExtractor = (
	api_response: APIResponse<any>
): Court[] => {
	return api_response.result as Court[];
};

export const CourtsListDTOTransformer = (dto_object: CourtDTO[]): Court[] => {
	return dto_object;
};
