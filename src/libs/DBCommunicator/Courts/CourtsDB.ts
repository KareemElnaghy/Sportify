import Court from "@/types/Court";
import { DBConnector } from "../DBConnector";
import { CourtsListDTOExtractor, CourtsListDTOTransformer } from "./CourtsDTO";

interface getCourtsData {
	page: number;
}
export async function getCourts(data: getCourtsData): Promise<Court[]> {
	// const response = await DBConnector;
	const response = null;
	const responseDTO = CourtsListDTOExtractor(response);
	const result = CourtsListDTOTransformer(responseDTO);
	// return result; // TODO: commented for testing
	return [
		{ id: "ABC", name: "rashid" },
		{ id: "ABD", name: "Basily" },
	];
}
