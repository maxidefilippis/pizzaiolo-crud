import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { getList, handleDelete } from "../../functions/crud";
import "./list.scss";

export default function List() {
  const { push } = useHistory();
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    setLoading(true);
    getList()
      .then((data) => setList(data))
      .then(() => setLoading(false));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) return <div>Cargando datos..</div>;
  return (
    <div className="list border shadow">
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Nombre</Th>
            <Th>Descripción</Th>
            <Th>Stock</Th>
            <Th isNumeric>Editar</Th>
            <Th isNumeric>Eliminar</Th>
          </Tr>
        </Thead>
        <Tbody>
          {list.length > 0 &&
            list?.map((el) => (
              <Tr key={el._id}>
                <Td>{el.name}</Td>
                <Td>{el.description}</Td>
                <Td>{el.stock}</Td>
                <Td onClick={() => push(`/edit/${el._id}`)} isNumeric>
                  Edit
                </Td>
                <Td onClick={() => handleDelete(el._id)} isNumeric>
                  Delete
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </div>
  );
}
