import { useState, useEffect, useMemo } from "react";

export function useWorkspaceTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const workspaceId = localStorage.getItem("workspaceId");
      const response = await fetch(
        `http://localhost:8080/taskly/getWorkspceById/${Number(workspaceId)}`
      );
      if (!response.ok) throw new Error("Fehler beim Laden");

      const data = await response.json();
      const allTasks = data.groups.flatMap((group) =>
        group.tasks.map((task) => ({
          id: task.taskId,
          text: task.taskTitle,
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

  useEffect(() => {
    fetchTasks();
  }, []);

  const updateTaskStatus = async (taskId, newStatus) => {
    const taskToUpdate = tasks.find((t) => t.id === taskId);
    if (!taskToUpdate) return;

    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t))
    );

    try {
      await fetch(`http://localhost:8080/taskly/updateTask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          taskId: taskToUpdate.id,
          taskStatus: newStatus,
          taskTitle: taskToUpdate.text,
          taskText: taskToUpdate.description || "",
          groupId: taskToUpdate.groupId,
        }),
      });
    } catch (error) {
      console.error("Update failed:", error);
      fetchTasks();
    }
  };

  const addTask = async (taskData) => {
    try {
      const response = await fetch(`http://localhost:8080/taskly/creatTask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          taskTitle: taskData.title,
          taskText: taskData.description,
          taskStatus: taskData.status,
          groupId: taskData.groupId,
        }),
      });

      if (!response.ok) throw new Error("Could not create task");

      const newTaskData = await response.json();

      const newTask = {
        id: newTaskData.taskId,
        text: newTaskData.taskTitle,
        description: newTaskData.taskText,
        status: newTaskData.taskStatus,
        category: newTaskData.groupName,
        groupId: taskData.groupId,
      };

      setTasks((prev) => [...prev, newTask]);
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  const tasksByStatus = useMemo(() => {
    return tasks.reduce((acc, task) => {
      acc[task.status] = [...(acc[task.status] || []), task];
      return acc;
    }, {});
  }, [tasks]);

  return { tasksByStatus, loading, updateTaskStatus, addTask };
}
