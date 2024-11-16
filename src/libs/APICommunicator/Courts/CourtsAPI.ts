import { APIConnector } from "../APIConnector";
import {
	CourtsListData,
	CourtsListDTOExtractor,
	CourtsListDTOTransformer,
} from "./CourtsDTO";

interface getCourtsData {
	page: number;
	recordsPerPage: number;
}
export async function getCourts(data: getCourtsData): Promise<CourtsListData> {
	const response = await APIConnector.get("/api/courts/list", {
		page: `${data.page}`,
		recordsPerPage: `${data.recordsPerPage}`,
	});
	const responseDTO = CourtsListDTOExtractor(response);
	const result = CourtsListDTOTransformer(responseDTO);
	return result;
}
