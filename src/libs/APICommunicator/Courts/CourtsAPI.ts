import Court, { NewCourt, NewCourtIncomplete } from "@/types/Court";
import { APIConnector } from "../APIConnector";
import {
	CourtsItemData,
	CourtsItemDTOExtractor,
	CourtsItemDTOTransformer,
	CourtsListData,
	CourtsListDTOExtractor,
	CourtsListDTOTransformer,
	NewCourtData,
	NewCourtDTOExtractor,
	NewCourtDTOTransformer,
	RemoveCourtData,
	UpdatedCourtDTOExtractor,
	UpdatedCourtDTOTransformer,
} from "./CourtsDTO";

interface getCourtsListData {
	page: number;
	recordsPerPage: number;
	searchQuery: string;
}
export async function getCourts(
	data: getCourtsListData
): Promise<CourtsListData> {
	const response = await APIConnector.get("/api/courts/list", {
		page: `${data.page}`,
		recordsPerPage: `${data.recordsPerPage}`,
		...(data.searchQuery != "" && { searchQuery: data.searchQuery }), // optional param only added if not empty
	});
	const responseDTO = CourtsListDTOExtractor(response);
	const result = CourtsListDTOTransformer(responseDTO);
	return result;
}

interface getCourtsItemData {
	courtIds: Court["id"][];
}

export async function getCourtItems(
	data: getCourtsItemData
): Promise<CourtsItemData> {
	const response = await APIConnector.get("/api/courts", {
		courtIds: data.courtIds.map((id) => `${id}`),
	});
	const responseDTO = CourtsItemDTOExtractor(response);
	const result = CourtsItemDTOTransformer(responseDTO);
	return result;
}

interface addCourtData {
	court: NewCourt;
}

export async function addCourt(data: addCourtData): Promise<NewCourtData> {
	const response = await APIConnector.post(
		"/api/courts",
		{},
		{},
		{
			court: data.court,
		}
	);
	const responseDTO = NewCourtDTOExtractor(response);
	const result = NewCourtDTOTransformer(responseDTO);
	return result;
}

interface updateCourtData {
	court: NewCourtIncomplete;
}

export async function updateCourt(
	data: updateCourtData
): Promise<NewCourtData> {
	const response = await APIConnector.put(
		"api/courts",
		{},
		{},
		{
			court: data.court,
		}
	);
	const responseDTO = UpdatedCourtDTOExtractor(response);
	const result = UpdatedCourtDTOTransformer(responseDTO);
	return result;
}

interface deleteCourtsData {
	courtIds: Court["id"][];
}

export async function removeCourt(
	data: deleteCourtsData
): Promise<RemoveCourtData> {
	const response = await APIConnector.delete(
		"api/courts",
		{},
		{},
		{ courtIds: data.courtIds.map((id) => `${id}`) }
	);
	return true;
}
