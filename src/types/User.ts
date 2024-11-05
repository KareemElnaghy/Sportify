export default class User {
	username: string = "";
	email: string = "";

	getEmail() {
		return `${this.username}@aucegypt.edu`;
	}
}
