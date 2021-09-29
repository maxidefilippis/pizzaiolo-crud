import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./form.scss";

export default function Formulario() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");

  const registrar = async (e) => {
    e.preventDefault();
    const nuevoElemento = { name, description, stock };
    const response = await axios.post(
      "http://localhost:4000/api",
      nuevoElemento
    );
    const mensaje = response.data.msg;
    console.log(response);
    Swal.fire({
      icon: "success",
      title: mensaje,
    });
  };

  return (
    <form className="form list" onSubmit={registrar} method="POST">
      <input
        type="text"
        name="name"
        placeholder="name"
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        name="description"
        placeholder="description"
        onChange={(event) => setDescription(event.target.value)}
      />
      <input
        type="number"
        name="stock"
        placeholder="stock"
        onChange={(event) => setStock(event.target.value)}
      />
      <button type="submit">Crear</button>
    </form>
  );
}
