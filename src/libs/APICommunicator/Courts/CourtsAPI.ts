import { APIConnector } from "../APIConnector";
import {
	CourtsListData,
	CourtsListDTOExtractor,
	CourtsListDTOTransformer,
} from "./CourtsDTO";

interface getCourtsData {
	page: number;
	recordsPerPage: number;
	searchQuery: string;
}
export async function getCourts(data: getCourtsData): Promise<CourtsListData> {
	const response = await APIConnector.get("/api/courts/list", {
		page: `${data.page}`,
		recordsPerPage: `${data.recordsPerPage}`,
		...(data.searchQuery != "" && { searchQuery: data.searchQuery }), // optional param only added if not empty
	});
	const responseDTO = CourtsListDTOExtractor(response);
	const result = CourtsListDTOTransformer(responseDTO);
	return result;
}
