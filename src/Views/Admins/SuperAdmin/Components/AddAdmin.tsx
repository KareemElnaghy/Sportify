import React, { FormEvent, useState } from "react";
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
  const [formData, setFormData] = useState<newAdminData>({
    name: "",
    email: "",
  });

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();

    const submissionData: newAdminData = formData;
    onClose(); // Close the pop-up after submit
    onSubmit(submissionData);
    setFormData({ name: "", email: "" }); // Clear form fields after submission
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
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              required
            />
          </div>

          <div className="popup-formInput">
            <label htmlFor="email">AUC Email:</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
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
