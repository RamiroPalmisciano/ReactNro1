import React, { useState } from "react";

const FormularioSimple = () => {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    setMensaje(`¡Bienvenido, ${nombre}!`);
    setNombre("");
  };

  return (
    <div>
      <h2>Formulario Simple</h2>
      <form onSubmit={manejarEnvio}>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ingresa tu nombre"
        />
        <button type="submit">Enviar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default FormularioSimple;
