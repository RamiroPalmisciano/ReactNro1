import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css"; // Acá se incluyen estilos globales así lo quisieras

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
