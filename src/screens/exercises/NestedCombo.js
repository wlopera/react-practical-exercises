import React, { useState } from "react";
import { HeaderProcess } from "../../components/headerProcess/HeaderProcess";
import styled from "styled-components";
import { ITEMS, PRODUCTS } from "../../data/Data";

const title = "Formularios: control select dependiente de otro control select";
const description =
  "Cuando trabajamos con formulario HTML los controles almacenan el valor cargado. Con React es muy común enlazar cada control de formulario con una o más variables de estado mediante el empleo de Hook. Este enlace nos facilita implementar validaciones de ingreso de datos inmediatamente después que el operador los carga.  ";
const exercise =
  "Confeccionar un formulario HTML que solicite la carga del nombre, edad y si tiene estudios o no una persona. [Utilizar input: text, number y check]";

export const NestedCombo = () => {
  const [item, setItem] = useState(ITEMS[0]);
  const [products, setProducts] = useState(
    PRODUCTS.filter((product) => product.codigorubro === item.codigo)
  );
  const [article, setArticle] = useState(products[0]);

  const handleItem = (e) => {
    const idItem = Number.parseInt(e.target.value);
    const filterItem = ITEMS.find((item) => item.codigo === idItem);
    setItem(filterItem);

    const filterProducts = PRODUCTS.filter(
      (item) => item.codigorubro === idItem
    );
    setProducts(filterProducts);

    setArticle({ ...filterProducts[0], rubro: filterItem.nombre });
  };

  const handleProduct = (e) => {
    const idProduct = Number.parseInt(e.target.value);
    const filterProducts = PRODUCTS.find((item) => item.codigo === idProduct);
    setArticle({ ...filterProducts, rubro: item.nombre });
  };

  return (
    <Container>
      <HeaderProcess
        title={title}
        description={description}
        exercise={exercise}
      />
      <Select value={item.codigo} onChange={handleItem}>
        {ITEMS.map((record) => (
          <Option key={record.codigo} value={record.codigo}>
            {record.nombre}
          </Option>
        ))}
      </Select>
      <Select value={article.codigo} onChange={handleProduct}>
        {products.map((record) => (
          <Option key={record.codigo} value={record.codigo}>
            {record.nombre}
          </Option>
        ))}
      </Select>
      <Ul>
        <li>
          Rubro: <Span>{article.rubro}</Span>
        </li>
        <li>
          ARtículo: <Span>{article.nombre}</Span>
        </li>
        <li>
          Precio: <Span>{article.precio}</Span>
        </li>
      </Ul>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-context: center;
  align-items: center;
`;

const Select = styled.select`
  font-size: 15px;
  height: 4vh;
  margin-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;
const Option = styled.option`
  font-size: 15px;
`;
const Ul = styled.ul`
  text-align: left;
  font-size: 20px;
`;
const Span = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
