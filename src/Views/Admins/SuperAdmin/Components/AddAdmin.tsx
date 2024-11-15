import React, { FormEvent, useState } from "react";
import "./AddAdminStyle.css";
import Popup from "@/Views/Components/Popup";

export interface newAdminData {
	name: string;
	email: string;
}

interface Props {
	onClose: () => void;
	onSubmit: (adminData: newAdminData) => Promise<void>;
}

export default function AddAdminForm({ onClose, onSubmit }: Props) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const handleSubmit = (e: FormEvent<HTMLElement>) => {
		e.preventDefault();

		const submissionData: newAdminData = {
			name: name,
			email: email,
		};
		onClose(); // Close the pop-up after submit
		onSubmit(submissionData);
		setName(""); // Clear form fields after submission
		setEmail("");
	};

	return (
		<>
			<Popup title="Add Admin" onSubmit={handleSubmit} onClose={onClose}>
				<div className="top-section">
					<div className="popup-formInput">
						<label htmlFor="name">Full Name:</label>
						<input
							type="text"
							id="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</div>

					<div className="popup-formInput">
						<label htmlFor="email">AUC Email:</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
				</div>
				<div className="bottom-actions">
					<button type="submit" className="popup-btnAction">
						Add Admin
					</button>
				</div>
			</Popup>
		</>
	);
}
