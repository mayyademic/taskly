import React, { useState } from "react";
import { Plus, X } from "lucide-react";

export default function AddTask({ onAdd, groupId }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "toDo",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    onAdd({ ...formData, groupId });

    setFormData({ title: "", description: "", status: "toDo" });
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <button
        className="add-task-btn-trigger"
        onClick={() => setIsEditing(true)}
      >
        <Plus size={18} />
        Add New Task
      </button>
    );
  }

  return (
    <div className="add-task-modal-overlay">
      <form onSubmit={handleSubmit} className="add-task-modal">
        <div className="modal-header">
          <p>Create New Task</p>
          <button
            type="button"
            className="close-btn"
            onClick={() => setIsEditing(false)}
          >
            <X size={32} strokeWidth={2.5} />
          </button>
        </div>

        <div className="div-task-create">
          <div className="titel-div">
            <p>Title:</p>

            <input
              autoFocus
              className="modal-input-title"
              placeholder="Task Title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
          </div>

          <div className="modal-row">
            <p>Status:</p>
            <select
              value={formData.status}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value })
              }
              className="dropdown-div"
            >
              <option value="toDo">To Do</option>
              <option value="inProgress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>
          <div className="description-div">
            <p>Text: </p>
            <textarea
              className="modal-input-desc"
              placeholder="Description (optional)"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>
        </div>

        <div className="modal-actions">
          <button
            type="button"
            className="btn-cancel"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
          <button type="submit" className="btn-save">
            Save Task
          </button>
        </div>
      </form>
    </div>
  );
}
