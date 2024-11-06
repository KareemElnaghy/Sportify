import APIResponse from "@/types/APIResponse";
import AdminLogin from "@/types/Admin";

type AdminDTO = AdminLogin;

export const AdminDTOExtractor = (api_response: APIResponse<any>): AdminLogin[] => {
    return api_response.result as AdminLogin[];

};

export const AdminDTOTransformer = (dto_object: AdminDTO[]): AdminLogin[] => {
    return dto_object;
};