import React, { useState, useEffect } from "react";
import {
  DndContext,
  closestCorners,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Circle, Clock, CheckCircle2 } from "lucide-react";
import "./style/style.css";

const COLUMNS = [
  {
    id: "toDo",
    title: "To do",
    statusIcon: <Circle className="icon-todo" size={20} />,
  },
  {
    id: "inProgress",
    title: "In Progress",
    statusIcon: <Clock className="icon-progress" size={20} />,
  },
  {
    id: "done",
    title: "Done",
    statusIcon: <CheckCircle2 className="icon-done" size={20} />,
  },
];

function TaskCard({ task, statusIcon }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    cursor: "grab",
    zIndex: isDragging ? 100 : 1,
    position: "relative",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="task-card"
    >
      <div className="task-left">
        {statusIcon}
        <span className="task-text">{task.text}</span>
      </div>
      <div className="task-right">
        <span className="task-category">{task.category}</span>
      </div>
    </div>
  );
}

function Column({ column, tasks }) {
  return (
    <div className="column">
      <div className="column-header">
        <h2>{column.title}</h2>
      </div>

      <SortableContext
        items={tasks.map((t) => t.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="task-list">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              statusIcon={column.statusIcon}
            />
          ))}
          {tasks.length === 0 && (
            <div className="empty-area">
              <p>Empty</p>
            </div>
          )}
        </div>
      </SortableContext>
    </div>
  );
}

export default function WorkspaceShow() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTask, setActiveTask] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const workspaceId = localStorage.getItem("workspaceId");

        const response = await fetch(
          `http://localhost:8080/taskly/getWorkspceById/${Number(workspaceId)}`
        );
        if (!response.ok) throw new Error("Fehler beim Laden");

        const data = await response.json();
        console.log(data);

        const allTasks = data.groups.flatMap((group) =>
          group.tasks.map((task) => ({
            id: task.taskId,
            text: task.taskTitle,
            description: task.taskText,
            status: task.taskStatus,
            category: group.groupName,
            groupId: group.groupId,
          }))
        );

        setTasks(allTasks);
      } catch (error) {
        console.error("Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  async function updateTaskStatus(taskId, newStatus) {
    try {
      await fetch(`http://localhost:8080/taskly/tasks/update-status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ taskId, status: newStatus }),
      });
    } catch (error) {
      console.error("Update failed:", error);
    }
  }

  function handleDragEnd(event) {
    const { active, over } = event;
    setActiveTask(null);
    if (!over) return;

    const taskId = active.id;
    const overId = over.id;
    let newStatus = overId;
    const overTask = tasks.find((t) => t.id === overId);
    if (overTask) newStatus = overTask.status;

    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );

    updateTaskStatus(taskId, newStatus);
  }

  if (loading) return <div style={{ padding: "20px" }}>Lade Workspace...</div>;

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
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragEnd={handleDragEnd}
        >
          {COLUMNS.map((column) => (
            <Column
              key={column.id}
              column={column}
              tasks={tasks.filter((t) => t.status === column.id)}
            />
          ))}
        </DndContext>
      </main>
    </div>
  );
}
