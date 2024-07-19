import React, { useState } from "react";
import { HeaderProcess } from "../../components/headerProcess/HeaderProcess";

const title = "Formularios: control textarea";
const description =
  "Para enlazar un control HTML de tipo textarea debemos definir la propiedad value en forma similar a los controles input que hemos visto hasta ahora.";
const exercise =
  "Mostrar un control de tipo área de texto. Cada vez que se ingrese un caracter actualizar la cantidad ingresados dentro del control.";

export const TextAreaForm = () => {
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <HeaderProcess
        title={title}
        description={description}
        exercise={exercise}
      />
      <form>
        <textarea cols="100" rows="10" value={text} onChange={handleText} />
        <p>Cantidad de caracteres ingresados: {text.length}</p>
      </form>
    </div>
  );
};
