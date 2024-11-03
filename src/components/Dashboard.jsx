import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskTable from "./TaskTable";
import Form from "./Form";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [reload, setReload] = useState(0);

  // Función para obtener las tareas desde la API
  const fetchTasks = async () => {
    try {
      const response = await axios.get("https://jso0a2j0c8.execute-api.us-east-2.amazonaws.com/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [reload]);

  // Función para crear una nueva tarea
  const createTask = async (taskData) => {
    try {
      await axios.post("https://jso0a2j0c8.execute-api.us-east-2.amazonaws.com/tasks", taskData);
      setReload(reload + 1);
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  // Función para actualizar una tarea
  const updateTask = async (id, updatedTask) => {
    try {
      await axios.put(`https://jso0a2j0c8.execute-api.us-east-2.amazonaws.com/tasks/${id}`, updatedTask);
      setReload(reload + 1);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // Función para eliminar una tarea
  const deleteTask = async (id) => {
    try {
      await axios.delete(`https://jso0a2j0c8.execute-api.us-east-2.amazonaws.com/tasks/${id}`);
      setReload(reload + 1);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <TaskTable tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      </div>
      <div style={{ flex: 1 }}>
        <Form createTask={createTask} />
      </div>
    </div>
  );
};

export default Dashboard;
