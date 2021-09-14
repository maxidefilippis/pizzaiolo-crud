import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
        <Link to="/">Inicio</Link>
        <Link to="/add">Agregar</Link>
      </nav>
      <div>{children}</div>
    </div>
  );
}
