"use client";

import { useStateObject } from "@/hooks/useStateObject";
import { useMemo } from "react";
import {
	default_PMAdminSettings,
	PMAdminSettings,
} from "@/PMs/Admins/Settings/SettingsPM";
import { getAdminSettingsModel } from "@/Models/Admins/SettingsModel";
import AdminSettingsView from "@/Views/Admins/AdminSettings/AdminSettingsView";

export default function AdminSettingsPage() {
	const pm = useStateObject<PMAdminSettings>(default_PMAdminSettings);
	const model = useMemo(() => {
		const model = getAdminSettingsModel(pm);
		model.setup();
		return model;
	}, []);

	return <AdminSettingsView pm={pm} />;
}
