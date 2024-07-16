import React from "react";
import styled from "styled-components";

export const GenericTable = ({ columns, rows }) => {
  if (columns.length === 0 || rows.length === 0) {
    return null;
  }

  return (
    <Table>
      <thead>
        <tr>
          {columns.map((column) => (
            <TH key={column.accesor}>{column.header}</TH>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.code}>
            {columns.map((column) => (
              <TD>{row[column.accesor]}</TD>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const Table = styled.table`
  border: 1px solid black;
`;

const TH = styled.th`
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
