"use client";

import { default_PMCourtsList, PMCourtsList } from "@/PMs/Courts/CourtsListPM";
import { useStateObject } from "@/hooks/useStateObject";
import CourtsListView from "@/Views/Courts/CourtsListView";
import { useMemo } from "react";
import { getCourtsListModel } from "@/Models/Courts/CourtsListModel";

export default function CourtsListPage() {
	const pm = useStateObject<PMCourtsList>(default_PMCourtsList);
	const model = useMemo(() => {
		const model = getCourtsListModel(pm);
		model.setup();
		return model;
	}, []);

	return <CourtsListView pm={pm} />;
}
