export default interface Student {
	email: string;
	firstName: string;
	lastName: string;
	photoLink: string | null;
	isTrainer: boolean;
	phoneNumber: string;
	passHash: string;
	isBanned: boolean;
}
