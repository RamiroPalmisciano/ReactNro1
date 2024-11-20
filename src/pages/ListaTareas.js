import React, { useState } from "react";

const ListaTareas = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== "") {
      setTareas([...tareas, { texto: nuevaTarea, completada: false }]);
      setNuevaTarea("");
    }
  };

  const completarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={agregarTarea}>Agregar</button>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index} style={{ textDecoration: tarea.completada ? "line-through" : "none" }}>
            {tarea.texto}
            <button onClick={() => completarTarea(index)}>
              {tarea.completada ? "Desmarcar" : "Completar"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTareas;
