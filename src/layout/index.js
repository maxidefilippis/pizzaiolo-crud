import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <nav className="layout__navbar navbar navbar-expand-lg navbar-light bg-light px-5">
        <h1>PIZZAIOLO STOCK</h1>
        <div className="layout__links">
          <Link to="/">Inicio</Link>
          <Link to="/add">Agregar</Link>
        </div>
      </nav>
      <div>{children}</div>
    </div>
  );
}
