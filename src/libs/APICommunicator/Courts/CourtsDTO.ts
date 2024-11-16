import APIResponse from "@/types/APIResponse";
import Court from "@/types/Court";

interface CourtsListDTO {
	courtsCount: number;
	courtsList: Court[];
}

export interface CourtsListData {
	courtsCount: number;
	courtsList: Court[];
}

export const CourtsListDTOExtractor = (
	api_response: APIResponse<any>
): CourtsListDTO => {
	return api_response.result as CourtsListDTO;
};

export const CourtsListDTOTransformer = (
	dto_object: CourtsListDTO
): CourtsListData => {
	return dto_object;
};
