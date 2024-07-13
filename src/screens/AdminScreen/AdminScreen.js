import React, { useState } from "react";
import Menu from "../../components/menu";

import Header from "../../components/header";
import Body from "../../components/body";
import Footer from "../../components/footer";
import { observer } from "mobx-react";
import store from "../../store/store";

import styles from "./AdminScreen.module.css";
import { EventCapture } from "../exercises/EventCapture";
import { RandomNumber } from "../exercises/RandomNumber";
import TableArticles from "../exercises/TableArticles";

const data = [
  {
    key: "event-capture",
    name: "Controles formulario HTML",
    component: "/event/capture",
  },
  {
    key: "random-number",
    name: "Número Aleatorio",
    component: "/random/number",
  },
  {
    key: "list-articles",
    name: "Tabla de artículos",
    component: "/list/articles",
  },
];

const AdminScreen = () => {
  const [selectedOption, setSelectedOption] = useState("/event/capture");

  const getContext = () => {
    switch (selectedOption) {
      case "/event/capture":
        return <EventCapture />;

      case "/random/number":
        return <RandomNumber />;

      case "/list/articles":
        return <TableArticles />;

      default:
        break;
    }
  };

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.mainWrapper}>
        <Menu
          title="Ejecicios Prácticos"
          data={data}
          onSelected={setSelectedOption}
          selectedOption={selectedOption}
        />
        <Body>{getContext()}</Body>
      </div>
      <Footer messages={store.messages} />
    </div>
  );
};

export default observer(AdminScreen);
