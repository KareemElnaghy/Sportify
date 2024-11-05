import Court from "@/types/Court";
import { APIConnector } from "../APIConnector";
import { CourtsListDTOExtractor, CourtsListDTOTransformer } from "./CourtsDTO";

interface getCourtsData {
	page: number;
}
export async function getCourts(data: getCourtsData): Promise<Court[]> {
	// const response = await APIConnector.get("/courts", { page: `${data.page}` });
	const response = null;
	const responseDTO = CourtsListDTOExtractor(response);
	const result = CourtsListDTOTransformer(responseDTO);
	// return result; // TODO: commented for testing
	return [
		{ id: "ABC", name: "rashid" },
		{ id: "ABD", name: "Basily" },
	];
}
