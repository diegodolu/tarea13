import React from "react";

const Task = ({ id, nombre, encargado, fecha_inicio, fecha_fin, estado, updateTask, deleteTask }) => {

  const handleUpdate = () => {
    const updatedTask = {
      nombre,
      encargado,
      fecha_inicio,
      fecha_fin,
      estado: "completado", // Ejemplo: cambiar el estado a 'completado'
    };
    updateTask(id, updatedTask);
  };

  const handleDelete = () => {
    deleteTask(id);
  };

  return (
    <tr>
      <td>{nombre}</td>
      <td>{encargado}</td>
      <td>{fecha_inicio}</td>
      <td>{fecha_fin}</td>
      <td>{estado}</td>
      <td>
        <button onClick={handleUpdate}>Actualizar</button>
        <button onClick={handleDelete}>Eliminar</button>
      </td>
    </tr>
  );
};

export default Task;
