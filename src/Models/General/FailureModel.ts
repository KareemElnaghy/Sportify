import { MutableRefObject } from "react";
import { getAuthModel } from "./AuthModel";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { flushSync } from "react-dom";

// stateless
export interface FailureModel {
	setup: () => Promise<void>;

	onCallFail: () => Promise<void>;

	onAuthFail: () => void;
}

let model: FailureModel | undefined = undefined;
let isLoaded = false;

export function getFailureModel(
	routerRef?: MutableRefObject<AppRouterInstance> | null
): FailureModel {
	if (model) return model;
	isLoaded = true;
	model = {
		setup: async () => {},

		onCallFail: async () => {
			console.log("failed to call");
			// alert user
		},

		onAuthFail: () => {
			// logout
			getAuthModel().logout();

			// direct to login page
			if (routerRef) {
				flushSync(() => {
					routerRef.current.push("/admin/login");
				});
			}
		},
	};

	return model;
}
