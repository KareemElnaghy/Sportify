import APIResponse from "@/types/APIResponse";
import Court from "@/types/Court";

interface CourtsListDTO {
  courtsCount: number;
  courtsList: Court[];
}

export interface CourtsListData {
  courtsCount: number;
  courtsList: Court[];
}

export const CourtsListDTOExtractor = (
  api_response: APIResponse<any>
): CourtsListDTO => {
  return api_response.result as CourtsListDTO;
};

export const CourtsListDTOTransformer = (
  dto_object: CourtsListDTO
): CourtsListData => {
  return dto_object;
};

interface CourtsItemDTO {
  courtsList: Court[];
}

export interface CourtsItemData {
  courtsList: Court[];
}

export const CourtsItemDTOExtractor = (
  api_response: APIResponse<any>
): CourtsItemDTO => {
  return api_response.result as CourtsItemDTO;
};

export const CourtsItemDTOTransformer = (
  dto_object: CourtsItemDTO
): CourtsItemData => {
  return dto_object;
};

// export type NewCourtData = Court;

interface NewCourtDTO {
  court: Court;
}

export interface NewCourtData {
  court: Court;
}

export const NewCourtDTOExtractor = (
  api_response: APIResponse<any>
): NewCourtDTO => {
  return api_response.result as NewCourtDTO;
};

export const NewCourtDTOTransformer = (
  dto_object: NewCourtDTO
): NewCourtData => {
  return dto_object;
};
