import React, { useEffect, useState } from "react";
import { HeaderProcess } from "../../components/headerProcess/HeaderProcess";
import styled from "styled-components";
import { GenericTable } from "./GenericTable";

const title = "Hook de efecto (función useEffect)";
const description =
  "Cuando necesitamos hacer peticiones a un servidor web podemos utilizar el API fetch de Javascript. Nos permite obtener en forma asíncrona recursos de un servidor web.";

const exercise =
  "Confeccionar una aplicación que recupere una respuesta en JSON (codigo, descripcion y precio) de la dirección: [https://scratchya.com.ar/react/datos.php]. Luego de recuperar los datos mostrarlos en una tabla HTML";

const columns = [
  {
    header: "Código",
    accesor: "code",
  },
  {
    header: "Descripción",
    accesor: "description",
  },
  {
    header: "Precio",
    accesor: "price",
  },
];

export const ApiFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getDataApi = async () => {
      setLoading(true);
      const response = await fetch("https://scratchya.com.ar/react/datos.php");
      const values = await response.json();
      const records = values.map((value) => ({
        code: value.codigo,
        description: value.descripcion,
        price: value.precio,
      }));
      // Colocar delay para simular consulta
      setTimeout(() => {
        setData(records);
        setLoading(false);
      }, 1000);
    };
    getDataApi();
  }, [setData]);

  return (
    <Container>
      <HeaderProcess
        title={title}
        description={description}
        exercise={exercise}
      />
      {loading ? (
        <P>Recuperando datos...</P>
      ) : (
        <GenericTable columns={columns} rows={data} />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const P = styled.p`
  font-size: 25px;
  font-weight: bold;
  text-align: left;
  width: 100%;
`;
