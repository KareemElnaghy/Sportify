"use client";

import { default_PMCourtsList, PMCourtsList } from "@/PMs/Courts/CourtsListPM";
import { useStateObject } from "@/hooks/useStateObject";
import CourtsListView from "@/Views/Courts/CourtsListView";
import { useMemo } from "react";
import { getCourtsListModel } from "@/Models/Courts/CourtsListModel";
import { useRouter } from "next/navigation";

export default function CourtsListPage() {
	const router = useRouter();
	const pm = useStateObject<PMCourtsList>(default_PMCourtsList);
	const model = useMemo(() => {
		const model = getCourtsListModel(pm, router);
		model.setup();
		return model;
	}, []);

	return <CourtsListView pm={pm} />;
}
