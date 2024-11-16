"use client";

import { useStateObject } from "@/hooks/useStateObject";
import { useMemo } from "react";
import {
	default_PMSuperAdmin,
	PMSuperAdmin,
} from "@/PMs/Admins/SuperAdmin/SuperAdminPM";
import { getSuperAdminModel } from "@/Models/Admins/SuperAdminListModel";
import SuperAdminView from "@/Views/Admins/SuperAdmin/SuperAdminView";
import { useRouter } from "next/navigation";

export default function SuperAdminPage() {
	const router = useRouter();
	const { obj: pm, ref: pmRef } =
		useStateObject<PMSuperAdmin>(default_PMSuperAdmin);
	const model = useMemo(() => {
		const model = getSuperAdminModel(pmRef, router);
		model.setup();
		return model;
	}, []);

	return <SuperAdminView pm={pm} />;
}
