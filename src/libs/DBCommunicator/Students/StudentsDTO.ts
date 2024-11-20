// import APIResponse from "@/types/APIResponse";
// import Court from "@/types/Court";
// import Student from "@/types/Student";

// type StudentDTO = Student;

// export const StudentsListDTOExtractor = (
// 	api_response: APIResponse<any>
// ): Student[] => {
// 	return api_response.result as Student[];
// };

// export const StudentsListDTOTransformer = (
// 	dto_object: StudentDTO[]
// ): Student[] => {
// 	return dto_object;
// };

import Student from "@/types/Student";

export type StudentDTO = {
	email: string;
	first_name: string | null;
	last_name: string | null;
	photo_link: string | null;
	is_trainer: boolean | null;
	phone_number: string | null;
	pass_hash: string | null;
	is_banned: boolean | null;
};

export const StudentsListDTOExtractor = (api_response: any[]): StudentDTO[] => {
	return api_response as StudentDTO[];
};

export const StudentsListDTOTransformer = (
	dto_object: StudentDTO[]
): Student[] => {
	return dto_object.map((s) => ({
		email: s.email,
		firstName: s.first_name || "",
		lastName: s.last_name || "",
		photoLink: s.photo_link || "",
		isTrainer: s.is_trainer || false,
		phoneNumber: s.phone_number || "",
		isBanned: s.is_banned || false,
	}));
};
