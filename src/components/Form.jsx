import React, { useState } from "react";

const Form = ({ createTask }) => {
  const [formData, setFormData] = useState({
    name: "",
    owner: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ ...formData, status: "pendiente" });
    setFormData({ name: "", owner: "", startDate: "", endDate: "" });
  };

  return (
    <div>
      <h2>Crear Tarea</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Encargado</label>
          <input type="text" name="owner" value={formData.owner} onChange={handleChange} />
        </div>
        <div>
          <label>Fecha de Inicio</label>
          <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
        </div>
        <div>
          <label>Fecha de Fin</label>
          <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
