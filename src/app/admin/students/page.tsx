"use client";

import { useStateObject } from "@/hooks/useStateObject";
import { useMemo } from "react";
import {
	default_PMStudentList,
	PMStudentList,
} from "@/PMs/Students/StudentsListPM";
import { getStudentListModel } from "@/Models/Students/StudentsListModel";
import StudentsListView from "@/Views/Students/StudentsListView";
import { useRouter } from "next/navigation";

export default function StudentsPage() {
	const router = useRouter();
	const { obj: pm, ref: pmRef } = useStateObject<PMStudentList>(
		default_PMStudentList
	);
	const model = useMemo(() => {
		const model = getStudentListModel(pmRef, router);
		model.setup();
		return model;
	}, []);

	return <StudentsListView pm={pm} />;
}
