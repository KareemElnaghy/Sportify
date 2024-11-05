import Admin from "@/types/Admin";

export interface AdminDTO {
    email: string;
    firstName: string;
	lastName: string;
    isSuper: boolean;
}

export const AdminDTOExtractor = (api_response: any): AdminDTO => {
    return {
        email: api_response.email,
        firstName: api_response.firstName,
        lastName: api_response.lastName,
        isSuper: api_response.isSuper,
    };
}