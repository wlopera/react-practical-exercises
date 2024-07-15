import React from "react";
import styled from "styled-components";

export const Dice = ({ value }) => {
  return <Div>{value}</Div>;
};

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  width: 3vw;
  height: 3vw;
  margin-bottom: 16px;
`;
