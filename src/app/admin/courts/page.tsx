"use client";

import { default_PMCourtsList, PMCourtsList } from "@/PMs/Courts/CourtsListPM";
import { useStateObject } from "@/hooks/useStateObject";
import CourtsListView from "@/Views/Courts/CourtsListView";
import { useMemo } from "react";
import { getCourtsListModel } from "@/Models/Courts/CourtsListModel";
import { useRouter } from "next/navigation";

export default function CourtsListPage() {
	const router = useRouter();
	const { obj: pm, ref: pmRef } =
		useStateObject<PMCourtsList>(default_PMCourtsList);

	const model = useMemo(() => {
		const model = getCourtsListModel(pmRef, router);
		model.setup();
		return model;
	}, []);

	return <CourtsListView pm={pm} />;
}
