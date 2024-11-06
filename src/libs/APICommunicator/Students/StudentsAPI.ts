import Student from "@/types/Student";
import { APIConnector } from "../APIConnector";
import { StudentsListDTOExtractor, StudentsListDTOTransformer } from "./StudentsDTO";

interface getStudentsData {
    page: number;
}

export async function getStudents(data: getStudentsData): Promise<Student[]> {
    const response = await APIConnector.get("/api/students/list", {
        page: `${data.page}`,
    });
    const responseDTO = StudentsListDTOExtractor(response);
    const result = StudentsListDTOTransformer(responseDTO);
    return result;
}