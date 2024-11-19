import { APIConnector } from "../APIConnector";
import {
	AdminDTOExtractor,
	AdminDTOTransformer,
	AdminsListData,
} from "./AdminsDTO";

interface getAdminData {
	page: number;
	recordsPerPage: number;
	searchQuery: string;
}
export async function getAdmins(data: getAdminData): Promise<AdminsListData> {
	const response = await APIConnector.get("/api/adminAccounts/list", {
		page: `${data.page}`,
		recordsPerPage: `${data.recordsPerPage}`,
		...(data.searchQuery != "" && { searchQuery: data.searchQuery }),
	});
	const responseDTO = AdminDTOExtractor(response);
	const result = AdminDTOTransformer(responseDTO);
	return result;
}


