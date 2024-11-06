import Court from "@/types/Court";

export type CourtDTO = {
	name: string | null;
	id: number;
	sport: string | null;
	location: string | null;
	description: string | null;
};

export const CourtsListDTOExtractor = (api_response: any[]): CourtDTO[] => {
	return api_response as CourtDTO[];
};

export const CourtsListDTOTransformer = (dto_object: CourtDTO[]): Court[] => {
	return dto_object.map((c) => ({
		name: c.name || "",
		id: c.id,
		sport: c.sport || "",
		location: c.location || "",
		description: c.description || "",
	}));
};
