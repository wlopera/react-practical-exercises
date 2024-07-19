import React, { useState } from "react";

import { HeaderProcess } from "../../components/headerProcess/HeaderProcess";

const title = "Formularios: control select";

const description =
  "Otro control que debemos ver como lo trabaja la librería React es el 'select'. Veamos como procesar un control HTML select de selección única. Debemos definir la propiedad value directamente al elemento 'select' y asociarlo con el 'estado'.";

const exercise =
  "Mostrar en un control de tipo 'select' los días de la semana. Cuando el operador lo selecciona mostrar cual se seleccionó en la página.";

const records = [
  { value: "monday", label: "Lunes" },
  { value: "tuesday", label: "Martes" },
  { value: "wednesday", label: "Miércoles" },
  { value: "thursday", label: "Juves" },
  { value: "friday", label: "Viernes" },
  { value: "saturday", label: "Sábado" },
  { value: "sunday", label: "Domingo" },
];
export const SelectForm = () => {
  const [day, setDay] = useState("monday");

  const handleDay = (e) => {
    setDay(e.target.value);
  };

  const getDay = () => {
    return records.filter((record) => record.value === day)[0].label;
  };

  return (
    <div>
      <HeaderProcess
        title={title}
        description={description}
        exercise={exercise}
      />
      <form>
        <select
          value={day}
          onChange={handleDay}
          style={{ width: "10vw", height: "4vh", fontSize: "18px" }}
        >
          {records.map((record) => (
            <option key={record.value} value={record.value}>
              {record.label}
            </option>
          ))}
        </select>
        <p style={{ fontSize: "20px" }}>Día seleccionado: {getDay()}</p>
      </form>
    </div>
  );
};
