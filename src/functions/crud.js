import axios from "axios";

const handleEdit = async (id, element) => {
  const { name, description, stock } = element;
  const { data } = await axios.put(`http://localhost:4000/api/${id}`, {
    name,
    description,
    stock
  });
  console.log("response", data);
  return data;
};

const getList = async () => {
  const { data } = await axios.get("http://localhost:4000/api");
  console.log("response", data);
  return data;
};

const getElement = async (id) => {
  const { data } = await axios.get(`http://localhost:4000/api/${id}`);
  console.log("response", data);
  return data;
};

const handleDelete = async (id) => {
  const { data } = await axios.delete(`http://localhost:4000/api/${id}`);
  console.log("response", data);
  return data;
};

export { handleDelete, handleEdit, getList, getElement };
