export default interface Admin {
	email: string;
	firstName: string;
	lastName: string;
}

export type NewAdmin = Admin;

export type NewAdminIncomplete = Admin;
