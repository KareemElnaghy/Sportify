import Court from "@/types/Court";
import PartyPost from "@/types/PartyPost";

export type PartyPostDTO = {
	id: number;
	owner_email: string | null;
	member: string | null;
	event_name: string | null;
	sport: string | null;
	court: string | null;
	start_time: Date | null;
	end_time: Date | null;
};

export const PartyPostsListDTOExtractor = (
	api_response: any[]
): PartyPostDTO[] => {
	return api_response as PartyPostDTO[];
};

export const PartyPostsListDTOTransformer = (
	dto_object: PartyPostDTO[]
): PartyPost[] => {
	return dto_object.map<PartyPost>((c) => ({
		id: c.id,
		ownerEmail: c.owner_email || "",
		member: c.member || "",
		eventName: c.event_name || "",
		sport: c.sport || "",
		location: c.court || "",
		description: "",
		startTime: c.start_time || new Date(), // FIXME: possible nulls should be visible
		endTime: c.end_time || new Date(),
	}));
};
