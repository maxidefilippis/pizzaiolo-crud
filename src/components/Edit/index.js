import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { handleEdit, getElement } from "../../functions/crud";

export default function Edit({ match }) {
  const { push } = useHistory();
  const { id } = match.params;
  const [element, setElement] = useState({
    name: "",
    description: "",
    stock: "",
  });

  useEffect(() => {
    getElement(id).then((element) => setElement(element));
  }, []);

  const handleChange = (e) => {
    setElement({
      ...element,
      [e.target.name]: e.target.value,
    });
  };
  const handleForm = (e) => {
    e.preventDefault();
    handleEdit(id, element);
    push("/");
  };

  return (
    <div>
      <h1>EDITAR ELEMENTO</h1>
      <form onSubmit={handleForm}>
        <input
          name="name"
          type="text"
          defaultValue={element.name}
          onChange={handleChange}
        />
        <input
          name="description"
          type="text"
          defaultValue={element.description}
          onChange={handleChange}
        />
        <input
          name="stock"
          type="number"
          defaultValue={element.stock}
          onChange={handleChange}
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
