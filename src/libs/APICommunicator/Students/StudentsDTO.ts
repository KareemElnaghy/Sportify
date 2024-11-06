import APIResponse from "@/types/APIResponse";
import Student from "@/types/Student";

type StudentDTO = Student;

export const StudentsListDTOExtractor = (
    api_response: APIResponse<any>
): StudentDTO[] => {
    return api_response.result as StudentDTO[];
};

export const StudentsListDTOTransformer = (dto_object: StudentDTO[]): Student[] => {
    return dto_object;
};