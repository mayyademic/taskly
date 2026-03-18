import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import "./style/addtask.css";
import "./style/style.css";

export default function EditTask({ task, onUpdate, closeModal }) {
  const [formData, setFormData] = useState({
    title: task.text || "",
    description: task.description || "",
    status: task.status || "toDo",
  });

  useEffect(() => {
    setFormData({
      title: task.text || "",
      description: task.description || "",
      status: task.status || "toDo",
    });
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(task.id, {
      text: formData.title,
      description: formData.description,
      status: formData.status,
    });
    closeModal();
  };

  return (
    <div
      className="add-task-modal-overlay"
      onClick={(e) => {
        e.stopPropagation();
        closeModal();
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="add-task-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <p>Edit Task</p>
          <button
            type="button"
            className="close-btn"
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
          >
            <X size={24} />
          </button>
        </div>

        <div className="div-task-create">
          <div className="titel-div">
            <p>Title:</p>
            <input
              autoFocus
              className="modal-input-title"
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
            <p>Text:</p>
            <textarea
              className="modal-input-desc"
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
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
          >
            Cancel
          </button>
          <button type="submit" className="btn-save">
            Update Changes
          </button>
        </div>
      </form>
    </div>
  );
}
