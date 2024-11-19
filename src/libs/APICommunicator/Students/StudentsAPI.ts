import Student from "@/types/Student";
import { APIConnector } from "../APIConnector";
import {
  StudentsListData,
  StudentsListDTOExtractor,
  StudentsListDTOTransformer,
} from "./StudentsDTO";

interface getStudentsData {
  page: number;
  recordsPerPage: number;
  searchQuery: string;
}

export async function getStudents(
  data: getStudentsData
): Promise<StudentsListData> {
  const response = await APIConnector.get("/api/profiles/list", {
    page: `${data.page}`,
    recordsPerPage: `${data.recordsPerPage}`,
    ...(data.searchQuery != "" && { searchQuery: data.searchQuery }),
  });
  const responseDTO = StudentsListDTOExtractor(response);
  const result = StudentsListDTOTransformer(responseDTO);
  return result;
}

interface getStudentsEmails

export async function getStudentItems(data: getStudentsItemData): Promise<>;
