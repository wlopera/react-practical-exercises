import React, { useState } from "react";
import styled from "styled-components";

import { HeaderProcess } from "../../components/headerProcess/HeaderProcess";
import { ARTICLES } from "../../data/Data";

const title = "Variables de estado de una componente mediante Hook";
const description =
  "Un Hook de estado es una función especial que nos permite conectarnos a las funciones de la librería de React. Una componente en React si necesita almacenar valores que luego en forma dinámica se actualizarán en pantalla, lo podemos resolver mediante Hook de estado. Por ejemplo un contador de productos seleccionados, un contador de segundos que se muestra en pantalla, la hora etc. Debemos importar la función 'useState' si queremos administrar Hook de estados: [import React, { useState } from 'react';]";
const exercise =
  "Ejercicio: Almacenar en el estado de la componente un vector con artículos. Mostrar en una tabla HTML dichos datos. Borrar el artículo cuando se presione el botón borrar de la tabla. [Se utiliza una data dummy de atículos]";

const TableArticles = () => {
  const [articles, setArticles] = useState(ARTICLES);

  const handleDeleteArticle = (codigo) => {
    const filter = articles.filter((article) => article.codigo !== codigo);
    setArticles(filter);
  };

  return (
    <Container>
      <HeaderProcess
        title={title}
        description={description}
        exercise={exercise}
      />
      <table>
        <thead>
          <tr>
            <TH>Código</TH>
            <TH>Descripción</TH>
            <TH>Precio</TH>
            <TH>Acción</TH>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <TR key={article.codigo}>
              <TD>{article.codigo}</TD>
              <TD>{article.descripcion}</TD>
              <TD>{article.precio}</TD>
              <TD onClick={() => handleDeleteArticle(article.codigo)}>x</TD>
            </TR>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default TableArticles;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TR = styled.tr`
  border: 1px solid black;
  &:hover {
    background-color: #bdbdbd;
  }
`;

const TH = styled.td`
  border: 1px solid black;
  font-size: 20px;
  width: 10vw;
  background-color: #28a745;
  color: white;
`;

const TD = styled.td`
  border: 1px solid black;
  font-size: 16px;
  font-weight: bold;
`;
