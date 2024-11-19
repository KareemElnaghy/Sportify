import APIResponse from "@/types/APIResponse";
import Student from "@/types/Student";

interface StudentsListDTO {
  studentsCount: number;
  studentsList: Student[];
}

export interface StudentsListData {
  studentsCount: number;
  studentsList: Student[];
}

export const StudentsListDTOExtractor = (
  api_response: APIResponse<any>
): StudentsListDTO => {
  return api_response.result as StudentsListDTO;
};

export const StudentsListDTOTransformer = (
  dto_object: StudentsListDTO
): StudentsListData => {
  return dto_object;
};
