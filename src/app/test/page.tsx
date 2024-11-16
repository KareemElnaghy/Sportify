"use client";

import { useStateObject } from "@/hooks/useStateObject";
import { useMemo } from "react";
import { default_PMTest, PMTest } from "@/PMs/Test/TestPM";
import { getTestModel } from "@/Models/Test/TestModel";
import TestView from "@/Views/Test/TestView";

export default function TestPage() {
	const { obj: pm, ref: pmRef } = useStateObject<PMTest>(default_PMTest);

	const model = useMemo(() => {
		const model = getTestModel(pmRef);
		model.setup();
		return model;
	}, []);

	return <TestView pm={pm} />;
}
