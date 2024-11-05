"use client";

import { useStateObject } from "@/hooks/useStateObject";
import { useMemo } from "react";
import {
	default_PMStudentList,
	PMStudentList,
} from "@/PMs/Students/StudentsListPM";
import { getStudentListModel } from "@/Models/Students/StudentsListModel";
import StudentsListView from "@/Views/Students/StudentsListView";

export default function StudentsPage() {
	const pm = useStateObject<PMStudentList>(default_PMStudentList);
	const model = useMemo(() => {
		const model = getStudentListModel(pm);
		model.setup();
		return model;
	}, []);

	return <StudentsListView pm={pm} />;
}
