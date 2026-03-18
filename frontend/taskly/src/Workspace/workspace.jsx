import React from "react";
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
import { useGlobalContext } from "../context/ContextFile";
import { useWorkspaceTasks } from "./WorkspaceTasks";
import "./style/style.css";
import AddTask from "./AddTask";

const COLUMNS = [
  {
    id: "toDo",
    title: "To do",
    icon: <Circle className="icon-todo" size={20} />,
  },
  {
    id: "inProgress",
    title: "In Progress",
    icon: <Clock className="icon-progress" size={20} />,
  },
  {
    id: "done",
    title: "Done",
    icon: <CheckCircle2 className="icon-done" size={20} />,
  },
];

function TaskCard({ task, icon }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 100 : 1,
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
        {icon}
        <span className="task-text">{task.text}</span>
      </div>
      <span className="task-category">{task.category}</span>
    </div>
  );
}

function Column({ column, tasks = [], onAddTask }) {
  return (
    <div className="column">
      <div className="column-header">
        <h2>{column.title}</h2>
      </div>

      <SortableContext
        items={tasks.map((t) => t.id)}
        strategy={verticalListSortingStrategy}
        id={column.id}
      >
        <div className="task-list">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} icon={column.icon} />
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
  const { firstName, lastName, logout } = useGlobalContext();
  const { tasksByStatus, loading, updateTaskStatus, addTask, defaultGroupId } =
    useWorkspaceTasks();

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;

    const overId = over.data.current?.sortable?.containerId || over.id;

    const currentTask = Object.values(tasksByStatus)
      .flat()
      .find((t) => t.id === activeId);
    if (currentTask && currentTask.status !== overId) {
      updateTaskStatus(activeId, overId);
    }
  };

  if (loading) return <div className="loading">Lade Workspace...</div>;

  return (
    <div className="workspace-container">
      <header className="workspace-header">
        <h1 className="workspace-title">Taskly Board</h1>
        <div className="user-profile">
          <AddTask onAdd={addTask} groupId={defaultGroupId} />
          <div className="user-name">
            <p>
              {firstName} {lastName}
            </p>
          </div>
          <div className="user-avatar">{firstName?.[0] || "U"}</div>
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </div>
      </header>

      <main className="board-layout">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragEnd={handleDragEnd}
        >
          {COLUMNS.map((col) => (
            <Column
              key={col.id}
              column={col}
              tasks={tasksByStatus[col.id]}
              onAddTask={addTask}
            />
          ))}
        </DndContext>
      </main>
    </div>
  );
}
