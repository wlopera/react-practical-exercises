import React, { useState } from "react";
import { HeaderProcess } from "../../components/headerProcess/HeaderProcess";
import styled from "styled-components";

const title =
  "Formularios: enlace de controles con variables de estados (Hooks de estados)";
const description =
  "Cuando trabajamos con formulario HTML los controles almacenan el valor cargado. Con React es muy común enlazar cada control de formulario con una o más variables de estado mediante el empleo de Hook. Este enlace nos facilita implementar validaciones de ingreso de datos inmediatamente después que el operador los carga.";
const exercise =
  "Confeccionar un formulario HTML que solicite la carga del nombre, edad y si tiene estudios o no una persona. [Utilizar input: text, number y check]";

export const ControlForm = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    age: 0,
    isWorking: false,
  });

  const procesar = () => {
    alert(JSON.stringify(dataForm, null, 2));
  };

  const handleDataForm = (e) => {
    const name = e.target.name;
    const value = name === "isWorking" ? e.target.checked : e.target.value;
    setDataForm((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <Container>
      <HeaderProcess
        title={title}
        description={description}
        exercise={exercise}
      />
      <Form onSubmit={procesar}>
        <Label>
          Ingrese nombre:
          <input
            type="text"
            name="name"
            value={dataForm.name}
            onChange={handleDataForm}
          />
        </Label>
        <Label>
          Ingrese edad:
          <input
            type="number"
            name="age"
            value={dataForm.age}
            onChange={handleDataForm}
          />
        </Label>
        <Label>
          Estudios:
          <input
            type="checkbox"
            name="isWorking"
            value={dataForm.isWorking}
            onChange={handleDataForm}
          />
        </Label>
        <Button>Enviar</Button>
      </Form>
      <Line />
      <P>Datos Ingresados</P>
      <Label>Nombre: {dataForm.name}</Label>
      <Label>Edad: {dataForm.age === 0 ? "" : dataForm.age}</Label>
      <Label>Estudios: {dataForm.isWorking ? "Si" : "No"}</Label>
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

const Button = styled.button`
  margin-top: 8px;
  width: 8vw;
  background-color: #d5f5e3;
`;
const P = styled.p`
  font-size: 30px;
  font-weight: bold;
  text-align: left;
  width: 100%;
  margin-bottom: 10px;
`;

const Line = styled.div`
  margin-top: 40px;
  width: 100%;
  border-top: 2px solid Black;
`;
