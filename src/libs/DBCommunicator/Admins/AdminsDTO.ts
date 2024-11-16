import Admin from "@/types/Admin";

export type AdminDTO = {
	email: string;
	first_name: string | null;
	last_name: string | null;
};

export const AdminsListDTOExtractor = (api_response: any[]): AdminDTO[] => {
	return api_response as AdminDTO[];
};

export const AdminsListDTOTransformer = (dto_object: AdminDTO[]): Admin[] => {
	return dto_object.map((c) => ({
		email: c.email,
		firstName: c.first_name || "",
		lastName: c.last_name || "",
	}));
};
