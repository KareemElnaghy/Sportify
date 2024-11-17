import Court, { NewCourt } from "@/types/Court";
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

export async function getItems(
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
