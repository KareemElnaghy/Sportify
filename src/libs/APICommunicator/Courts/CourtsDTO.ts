import { Court } from "@/DataClasses/Court";
import { APIResponseObj } from "../APIConnector";

export interface CourtDTO {
	Name: string;
	id: string;
}
export type CourtsListDTO = CourtDTO[];

export const CourtsListDTOExtractor = (
	api_response: APIResponseObj
): CourtsListDTO => {
	return [];
};

export const CourtsListDTOTransformer = (
	dto_object: CourtsListDTO
): Court[] => {
	return [];
};
