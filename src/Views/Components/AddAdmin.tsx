import React, { useState } from "react";

interface Props {
  onClose: () => void;
  onSubmit: (adminData: { name: string; email: string }) => void;
}

const AddAdminForm: React.FC<Props> = ({ onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ name, email });
    onClose(); // Close the pop-up after submit
    setName(""); // Clear form fields after submission
    setEmail("");
  };

  return (
    <div className="add-admin-popup">
      <form onSubmit={handleSubmit}>
        <h2>Add New Admin</h2>
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">AUC Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Add Admin</button>
      </form>
      <button className="close-btn" onClick={onClose}>
        X
      </button>
    </div>
  );
};

export default AddAdminForm;
