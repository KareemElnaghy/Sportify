"use client";

import {
	default_PMCourtsList,
	PMCourtsList,
} from "@/PMs/Courts/CourtsListPagePM";
import { useStateObject } from "@/hooks/useStateObject";
import CourtsListView from "@/Views/Courts/CourtsListView";
import { useMemo } from "react";
import { getModel } from "@/Models/Courts/CourtsListModel";

export default function CourtsList() {
	const pm = useStateObject<PMCourtsList>(default_PMCourtsList);
	const model = useMemo(() => {
		const model = getModel(pm);
		model.setup();
		return model;
	}, []);

	return <CourtsListView pm={pm} />;
}
