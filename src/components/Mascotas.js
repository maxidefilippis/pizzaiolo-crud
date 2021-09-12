import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Mascotas() {
  const [mascotas, setMascotas] = useState([]);

  const getMascotas = async () => {
    let { data } = await axios.get("http://localhost:4000/api");
    setMascotas(data);
  };

  const handleDelete = async (id) => {
    let { data } = await axios.delete(`http://localhost:4000/api/${id}`);
    console.log("response", data);
  };
  const handleEdit = async (id) => {
    let { data } = await axios.put(`http://localhost:4000/api/${id}`, {
      name: "nuevo",
    });
    console.log("response", data);
  };

  useEffect(() => {
    getMascotas();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      {mascotas.length > 0 &&
        mascotas?.map((el) => (
          <div key={el._id} style={{ margin: "1rem" }}>
            <div>id: {el._id}</div>
            <div onClick={() => handleEdit(el._id)}>{el.nombre || el.name}</div>
            <div onClick={() => handleDelete(el._id)}>eliminar mascota</div>
          </div>
        ))}
    </div>
  );
}
