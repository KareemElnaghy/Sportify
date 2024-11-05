import { Court } from "@/DataClasses/Court";
import { APIConnector } from "../APIConnector";
import { CourtsListDTOExtractor, CourtsListDTOTransformer } from "./CourtsDTO";

interface getCourtsData {
	page: number;
}
export async function getCourts(data: getCourtsData): Promise<Court[]> {
	const response = await APIConnector.get("/courts", { page: `${data.page}` });
	const responseDTO = CourtsListDTOExtractor(response);
	const result = CourtsListDTOTransformer(responseDTO);
	// return result;
	return [
		{ id: "ABC", name: "rashid" },
		{ id: "ABD", name: "Basily" },
	];
}
