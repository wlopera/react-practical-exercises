import React, { useState } from "react";
import styled from "styled-components";
import { HeaderProcess } from "../../components/headerProcess/HeaderProcess";

const title = "Componentes: propiedades";
const description =
  "El elemento fundamental que tenemos para comunicarnos con una componente son las propiedades. Mediante las propiedades podemos enviar datos a la componente para que los muestre. Podemos pasar cualquier tipo de datos a una componente, no solo tipos primitivos como enteros, reales, string.";

const exercise =
  "Confeccionar una aplicación que permita ingresar por teclado dos enteros y nos muestre la suma. Agregar a una lista todas las operaciones ejecutadas hasta este momento.";

export const ListSum = () => {
  const [records, setRecords] = useState([]);

  const sum = (e) => {
    e.preventDefault();
    const value1 = e.target.param1?.value;
    const value2 = e.target.param2?.value;

    if (value1.length === 0 || value2.length === 0) {
      return;
    }

    const response = `${value1} + ${value2}= ${
      parseInt(value1) + parseInt(value2)
    }`;

    setRecords((prevRecord) => [...prevRecord, response]);
    e.target.param1.value = "";
    e.target.param2.value = "";
  };

  return (
    <Container>
      <HeaderProcess
        title={title}
        description={description}
        exercise={exercise}
      />
      <Form onSubmit={sum}>
        <Input type="number" name="param1" placeholder="Ingrese primer valor" />
        <Input
          type="number"
          name="param2"
          placeholder="Ingrese segundo valor"
        />
        <Button>Sumar</Button>
      </Form>
      <ul>
        {records.map((record, index) => (
          <Li key={index}>{record}</Li>
        ))}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  display: flex;
  margin: 10px;
  font-size: 20px;
  width: 20vw;
`;

const Button = styled.button`
  font-size: 20px;
  background-color: #007bff;
  color: white;
  width: 20vw;
  margin-left: 15px;
`;

const Li = styled.li`
  font-size: 20px;
  width: 20vw;
  text-align: left;
`;
