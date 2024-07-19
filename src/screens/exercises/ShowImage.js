import React, { useState } from "react";

import { HeaderProcess } from "../../components/headerProcess/HeaderProcess";
import styled from "styled-components";

const title = "Mostrar imágenes localizadas en la carpeta public";

const description =
  "La primer forma de trabajar con imágenes es React, es localizando los mismos en la carpeta public o una subcarpeta de la misma.";

const exercise =
  "Crear una aplicación que muestre una bandera de un país una a la vez, permitir con dos botones cambiar a la siguiente o anterior bandera.";

const flagCountries = [
  "argentina",
  "brasil",
  "bolivia",
  "chile",
  "colombia",
  "ecuador",
  "paraguay",
  "peru",
  "uruguay",
  "venezuela",
];

export const ShowImage = () => {
  const [positionFlag, setPositionFlag] = useState(0);

  const previusFlag = () => {
    if (positionFlag === 0) {
      return;
    }
    setPositionFlag((currentPos) => currentPos - 1);
  };

  const nextFlag = () => {
    if (positionFlag === flagCountries.length - 1) {
      return;
    }
    setPositionFlag((currentPos) => currentPos + 1);
  };

  const flag = flagCountries[positionFlag];

  return (
    <Container>
      <HeaderProcess
        title={title}
        description={description}
        exercise={exercise}
      />
      <Div>
        <h2>Banderas de países Latinoamericanos</h2>
        <Img src={process.env.PUBLIC_URL + "/images/" + flag + ".png"} />
        <DivImage>
          <input type="button" value={"<"} onClick={previusFlag} />
          <input type="button" value={">"} onClick={nextFlag} />
        </DivImage>
        <P>{flag.toUpperCase()}</P>
      </Div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const DivImage = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

const Img = styled.img`
  width: 20vw;
  height: 25vh;
  border: 2px solid grey;
`;

const P = styled.p`
  font-size: 16px;
  font-weight: 500;
`;
