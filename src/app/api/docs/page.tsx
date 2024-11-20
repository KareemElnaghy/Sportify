"use client";

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import "./SwaggerStyles.css";
import { useEffect } from "react";

export default function Docs() {
	useEffect(() => {
		const originalError = console.error;
		console.error = (...args) => {
			if (args[0].includes("UNSAFE_componentWillReceiveProps")) return;
			originalError(...args);
		};
		return () => {
			console.error = originalError;
		};
	}, []);

	return <SwaggerUI url="http://localhost:3000/swagger.json" />;
}
