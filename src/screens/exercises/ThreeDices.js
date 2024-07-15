import React, { useState } from "react";
import { HeaderProcess } from "../../components/headerProcess/HeaderProcess";
import styled from "styled-components";
import { Dice } from "./Dice";

const title = "Componentes";
const description =
  "Las componentes son una característica fundamental de React. Nos permiten dividir la aplicación en trozos de nuestra interfaz visual con objetivos bien definidos: 'menú de opciones', 'formulario de búsqueda', 'ventanas de mensajes', 'tablas de datos' etc. La división de nuestra aplicación en componentes nos ayudan a reutilizar dicho código en proyectos futuros. Hasta ahora cada proyecto que hemos desarrollado ha implementado una sola componente funcional llamada 'App' (hacemos referencia a que se trata de una componente funcional, ya que versiones antiguas de React proponían por defecto una componente de clase)";

const exercise =
  "Ejercicio: Confeccionar una aplicación que muestre tres dados. Plantear una componente funcional llamada 'Dado' que tenga una propiedad llamada 'valor' a la cual le llega el dato a mostrar. Componente principal 'ThreeDices' y dentro de la misma definiremos 3 componentes de tipo 'Dado'";

export const ThereDices = () => {
  const [dices, setDices] = useState([]);

  const handleGetValues = () => {
    let values = [];
    for (let i = 0; i < 3; i++) {
      values.push(Math.floor(Math.random() * 6) + 1);
    }
    setDices(values);
  };

  return (
    <Container>
      <HeaderProcess
        title={title}
        description={description}
        exercise={exercise}
      />
      <Button onClick={handleGetValues}>Lanzar dados</Button>
      {dices?.map((dice, index) => (
        <Dice key={index} value={dice} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  margin-bottom: 20px;
  background-color: #007bff;
  color: white;
  border: 1px solid black;
  border-radius: 8px;
  width: 8vw;
  height: 4vh;
`;
