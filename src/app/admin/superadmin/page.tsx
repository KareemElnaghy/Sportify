"use client";

import { useStateObject } from "@/hooks/useStateObject";
import { useMemo } from "react";
import {
	default_PMSuperAdmin,
	PMSuperAdmin,
} from "@/PMs/Admins/SuperAdmin/SuperAdminPM";
import { getSuperAdminModel } from "@/Models/Admins/SuperAdminListModel";
import SuperAdminView from "@/Views/Admins/SuperAdmin/SuperAdminView";

export default function SuperAdminPage() {
	const pm = useStateObject<PMSuperAdmin>(default_PMSuperAdmin);
	const model = useMemo(() => {
		const model = getSuperAdminModel(pm);
		model.setup();
		return model;
	}, []);

	return <SuperAdminView pm={pm} />;
}
