import React from "react";
import Task from "./Task";

const TaskTable = ({ tasks, updateTask, deleteTask }) => {
  return (
    <div>
      <h2>Lista de Tareas</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Encargado</th>
            <th>Fecha de Inicio</th>
            <th>Fecha de Fin</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task
              key={task.id}
              {...task}
              updateTask={updateTask}
              deleteTask={deleteTask}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
