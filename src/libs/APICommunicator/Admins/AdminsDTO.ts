import APIResponse from "@/types/APIResponse";
import Admin from "@/types/Admin";

interface AdminsListDTO {
	adminsCount: number;
	adminsList: Admin[];
}

export interface AdminsListData {
	adminsCount: number;
	adminsList: Admin[];
}

export const AdminDTOExtractor = (
	api_response: APIResponse<any>
): AdminsListDTO => {
	return api_response.result as AdminsListDTO;
};

export const AdminDTOTransformer = (
	dto_object: AdminsListDTO
): AdminsListData => {
	return dto_object;
};
