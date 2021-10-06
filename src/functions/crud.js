import axios from "axios";
import Swal from "sweetalert2";

const handleEdit = async (id, element) => {
  const { name, description, stock } = element;
  const { data } = await axios.put(`http://localhost:4000/api/${id}`, {
    name,
    description,
    stock,
  });
  return data;
};

const getList = async () => {
  const { data } = await axios.get("http://localhost:4000/api");
  return data;
};

const getElement = async (id) => {
  const { data } = await axios.get(`http://localhost:4000/api/${id}`);
  return data;
};

const handleDelete = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      const { data } = axios.delete(`http://localhost:4000/api/${id}`);
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
      return data;
    }
  });
};

export { handleDelete, handleEdit, getList, getElement };
