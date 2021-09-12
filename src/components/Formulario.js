import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function Formulario() {
  const [name, setName] = useState("");

  const registrar = async (e) => {
    e.preventDefault();
    const nuevaMascota = { name };
    const response = await axios.post(
      "http://localhost:4000/api",
      nuevaMascota
    );
    const mensaje = response.data.msg;
    console.log(response);
    Swal.fire({
      icon: "success",
      title: mensaje,
    });
  };

  return (
    <form onSubmit={registrar} method="POST">
      <input
        name="name"
        placeholder="name"
        onChange={(event) => setName(event.target.value)}
      />
      <button type="submit">Crear</button>
    </form>
  );
}
