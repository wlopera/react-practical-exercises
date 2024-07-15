import React, { useState } from "react";
import styled from "styled-components";
import { HeaderProcess } from "../../components/headerProcess/HeaderProcess";

const title = "Hook de efecto (función useEffect)";
const description =
  "La función useEffect se ejecuta en cada renderizado, inclusive en el primero. Podemos llamar a la función useEffect más de una vez y crear varios hook de efecto. Está diseñado para que si la función que pasamos por parámetro retorna otra función, React va a ejecutar dicha función cuando se desmonte el componente del DOM (normalmente en esta función liberamos recursos como desuscribirse a eventos). Actualizar en tiempo real el título de la página con los caracteres ingresados en un control input. Para esto debemos acceder directamente al DOM.";

const exercise =
  "Actualizar en tiempo real el título de la página con los caracteres ingresados en un control input. Para esto debemos acceder directamente al DOM.";

export const PageTitle = () => {
  const [text, setText] = useState();

  const handleText = (e) => {
    document.title = e.target.value;
    setText(e.target.value);
  };

  return (
    <Container>
      <HeaderProcess
        title={title}
        description={description}
        exercise={exercise}
      />
      <Input
        type="text"
        value={text}
        onChange={handleText}
        placeholder="Ingrese título"
      />
      <P>{text}</P>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-context: center;
  align-items: left;
`;

const Input = styled.input`
  font-size: 20px;
  width: 20vw;
`;

const P = styled.p`
  font-size: 20px;
  background-color: #007bff;
  color: white;
  width: 20vw;
`;
