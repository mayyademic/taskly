import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import "./style/style.css";
import { User, Circle, Clock, CheckCircle2 } from "lucide-react";

export default function WorkspaceShow() {
  return (
    <div>
      <Workspace />
    </div>
  );
}

function Workspace() {
  // const columns = ["To do", "In Progress", "Done"];
  const columns = [
    {
      id: "todo",
      title: "To do",
      tasks: [
        {
          id: 1,
          text: "Grandmother visit",
          category: "Home",
        },
        {
          id: 2,
          text: "Clean the room",
          category: "Home",
        },
      ],
      statusIcon: <Circle className="icon-todo" size={20} />,
    },
    {
      id: "in-progress",
      title: "In Progress",
      tasks: [
        {
          id: 3,
          text: "Call to parents",
          category: "Home",
        },
        {
          id: 4,
          text: "Buy chocolate",
          category: "Shop",
        },
      ],
      statusIcon: <Clock className="icon-progress" size={20} />,
    },
    {
      id: "done",
      title: "Done",
      tasks: [
        {
          id: 5,
          text: "Clothing wash",
          category: "Home",
        },
      ],
      statusIcon: <CheckCircle2 className="icon-done" size={20} />,
    },
  ];

  return (
    <div className="workspace-container">
      <header className="workspace-header">
        <h1 className="workspace-title">To do List</h1>

        <div className="user-profile">
          <div className="user-name">
            <p>Bob</p>
            <p>Braun</p>
          </div>
          <div className="user-avatar">B</div>
        </div>
      </header>

      <main className="board-layout">
        {columns.map((col) => (
          <div key={col.id} className="column">
            <div className="column-header">
              <h2>{col.title}</h2>
            </div>

            <div className="task-list">
              {col.tasks.map((task) => (
                <div key={task.id} className="task-card">
                  <div className="task-left">
                    {col.statusIcon}
                    <span className="task-text">{task.text}</span>
                  </div>
                  <div className="task-right">
                    <span className="task-category">{task.category}</span>
                  </div>
                </div>
              ))}

              {col.tasks.length === 0 && (
                <div className="empty-area">
                  <p>Empty</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
