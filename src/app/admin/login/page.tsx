"use client";

import { useStateObject } from "@/hooks/useStateObject";
import { useMemo } from "react";
import {
	default_PMAdminLogin,
	PMAdminLogin,
} from "@/PMs/Admins/AdminLogin/AdminLoginPM";
import { getAdminLoginModel } from "@/Models/Admins/AdminLoginModel";
import AdminLoginView from "@/Views/Admins/AdminLogin/AdminLoginView";

export default function AdminLoginPage() {
	const pm = useStateObject<PMAdminLogin>(default_PMAdminLogin);
	const model = useMemo(() => {
		const model = getAdminLoginModel(pm);
		model.setup();
		return model;
	}, []);

	return <AdminLoginView pm={pm} />;
}
