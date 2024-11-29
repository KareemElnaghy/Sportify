"use client";

import { getFailureModel } from "@/Models/General/FailureModel";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { useMemo, useRef } from "react";

interface props {
	children: React.ReactNode;
}

export function FaileureModelProvider({ children }: props) {
	const router = useRouter();
	const routerRef = useRef<AppRouterInstance>(router);
	const model = useMemo(() => {
		const model = getFailureModel(routerRef);
		model.setup();
		return model;
	}, []);

	return <>{children}</>;
}
