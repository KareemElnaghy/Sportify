const baseURL = "http://localhost:3000";

export interface APIResponseObj {
	status: "OK" | "ERROR";
}
export type APIResponse = Promise<APIResponseObj>;

type fetchParameters = {
	[key: string]: string;
};

export const APIConnector = {
	async get(path: string, parameters?: fetchParameters): APIResponse {
		// fetch
		return {
			status: "OK",
		};
	},

	async post(path: string): APIResponse {
		return {
			status: "OK",
		};
	},
};
