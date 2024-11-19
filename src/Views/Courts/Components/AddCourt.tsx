import React, {FormEvent, useState} from "react";
import Popup from "@/Views/Components/Popup";

export interface newCourtData{
    courtName: string;
    location: string;
    sportName: string;
    maxCapacity: number;
}

interface Props{
    onClose : () => void;
    onSubmit : (courtData: newCourtData) => Promise<void>;
}

export default function AddCourtForm({onClose, onSubmit} : Props){
    const [formData, setFormData] = useState<newCourtData>({
        courtName: "",
        location: "",
        sportName: "",
        maxCapacity: 0
    })

    const handleSubmit = (e: FormEvent<HTMLElement>) => {
        e.preventDefault();
        onClose();
        onSubmit(formData);
        setFormData({courtName: "", location: "", sportName: "", maxCapacity: 0});
    }

    return (
        <>
            <Popup title="Add Court" onSubmit={handleSubmit} onClose={onClose}>
                <div className="top-section">
                <div className="popup-formInput">
                    <label htmlFor="name">Court Name:</label>
                    <input
                    type="text"
                    id="name"
                    value={formData.courtName}
                    onChange={(e) =>
                        setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    required
                    />
                </div>

                <div className="popup-formInput">
                    <label htmlFor="email">Sport Name:</label>
                    <input
                    type="email"
                    id="email"
                    value={formData.sportName}
                    onChange={(e) =>
                        setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    required
                    />
                </div>

                <div className="popup-formInput">
                    <label htmlFor="email">Maximum Capacity:</label>
                    <input
                    type="email"
                    id="email"
                    value={formData.maxCapacity}
                    onChange={(e) =>
                        setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    required
                    />
                </div>

                <div className="popup-formInput">
                    <label htmlFor="email">Location:</label>
                    <input
                    type="email"
                    id="email"
                    value={formData.location}
                    onChange={(e) =>
                        setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    required
                    />
                </div>
                
                </div>
                <div className="bottom-actions">
                <button type="submit" className="popup-btnAction">
                    Add Court
                </button>
                </div>
            </Popup>
        </>
    );
}