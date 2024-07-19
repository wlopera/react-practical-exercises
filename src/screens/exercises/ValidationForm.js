import React, { useState } from "react";
import { HeaderProcess } from "../../components/headerProcess/HeaderProcess";
import styled from "styled-components";

const title = "Formularios: validación inmediata";
const description =
  "Vimos en el concepto anterior lo usual en React es asociar a cada control de un formulario HTML un 'estado' en la componente. Esto nos permite inmediatamente se produzca el cambio reaccionar ya sea aceptando o rechazando dicho dato. Cada vez que se realiza la carga de datos es un momento muy adecuado para implementar validaciones y no cambiar el 'estado' si los datos son incorrecto.";
const exercise =
  "Confeccionar una aplicación que permita ingresar en un control 'input' de tipo 'text' solo valores binarios, es decir solo ceros y unos.";

const binaryRegex = /^[01]+$/;

export const ValidationForm = () => {
  const [number, setNumber] = useState("");
  const [valid, setValid] = useState(true);

  const handleValue = (e) => {
    const value = e.target.value;
    if (value === "" || binaryRegex.test(value)) {
      setNumber(value);
      setValid(true);
    } else {
      setValid(false);
    }
  };

  return (
    <Container>
      <HeaderProcess
        title={title}
        description={description}
        exercise={exercise}
      />
      <Form>
        <Label>
          Ingrese un número binario:
          <input type="text" value={number} onChange={handleValue} />
        </Label>
        {!valid && <Pspan>Solo se permiten valores binarios [0 y 1]</Pspan>}
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-context: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
`;

const Label = styled.label`
  font-size: 20px;
  text-align: left;
  width: 100%;
  padding-bottom: 10px;
`;

const Pspan = styled.span`
  color: red;
  font-size: 18px;
  font-weight: bold;
  background-color: #fff9c4;
  width: 28vw;
  padding-left: 2px;
`;
