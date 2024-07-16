import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HeaderProcess } from "../../components/headerProcess/HeaderProcess";

const title = "Hook de efecto (función useEffect)";
const description =
  "La función useEffect se ejecuta en cada renderizado, inclusive en el primero. Podemos llamar a la función useEffect más de una vez y crear varios hook de efecto. Está diseñado para que si la función que pasamos por parámetro retorna otra función, React va a ejecutar dicha función cuando se desmonte el componente del DOM (normalmente en esta función liberamos recursos como desuscribirse a eventos). Actualizar en tiempo real el título de la página con los caracteres ingresados en un control input. Para esto debemos acceder directamente al DOM.";

const exercise =
  "Crear una componente que muestre por pantalla la coordenada donde se encuentra la flecha del mouse. En la componente principal disponer un botón para que muestre u oculte las coordenada.";

export const MouseMoveCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);

  const handlePosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handlePosition);

    return () => {
      window.removeEventListener("mousemove", handlePosition);
      console.log("Borrado registro de eventos");
    };
  }, []);

  return (
    <Container>
      <HeaderProcess
        title={title}
        description={description}
        exercise={exercise}
      />
      {visible && (
        <P>
          {position.x} - {position.y}
        </P>
      )}
      <Button onClick={() => setVisible((prev) => !prev)}>
        {visible ? "Ocultar Coordenadas" : "Mostrar Coordenadas"}
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-context: center;
  align-items: left;
`;

const P = styled.p`
  font-size: 20px;
  background-color: #28a745;
  color: white;
`;

const Button = styled.button`
  font-size: 20px;
  background-color: #007bff;
  color: white;
`;
