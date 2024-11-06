import AdminLogin from "@/types/Admin";
import { APIConnector } from "../APIConnector";
import { AdminDTO, AdminDTOExtractor } from "./AdminsDTO";

interface getAdminData {
    page: number;
}
export async function getAdmins(data: getAdminData): Promise<AdminLogin[]> {
    const response = await APIConnector.get("/api/admins/list", {
        page: `${data.page}`,
    });
    const responseDTO = AdminDTOExtractor(response);
    const result = responseDTO;
    return result;
}
