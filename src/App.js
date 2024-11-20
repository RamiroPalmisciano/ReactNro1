import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HolaMundo from "./pages/HolaMundo";
import TarjetaPresentacion from "./pages/TarjetaPresentacion";
import Contador from "./pages/Contador";
import ListaTareas from "./pages/ListaTareas";
import FormularioSimple from "./pages/FormularioSimple";

const App = () => {
  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <h1>Ejercicios de React</h1>
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><Link to="/hola-mundo">1. Hola Mundo</Link></li>
            <li><Link to="/tarjeta-presentacion">2. Tarjeta de Presentación</Link></li>
            <li><Link to="/contador">3. Contador</Link></li>
            <li><Link to="/lista-tareas">4. Lista de Tareas</Link></li>
            <li><Link to="/formulario-simple">5. Formulario Simple</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/hola-mundo" element={<HolaMundo />} />
          <Route path="/tarjeta-presentacion" element={<TarjetaPresentacion />} />
          <Route path="/contador" element={<Contador />} />
          <Route path="/lista-tareas" element={<ListaTareas />} />
          <Route path="/formulario-simple" element={<FormularioSimple />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
