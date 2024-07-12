import React, { useState } from "react";
import Menu from "../../components/menu";

import Header from "../../components/header";
import Body from "../../components/body";
import Footer from "../../components/footer";
import { observer } from "mobx-react";
import store from "../../store/store";

import styles from "./AdminScreen.module.css";
import { EventCapture } from "../exercises/EventCapture";

const data = [
  {
    key: "event-capture",
    name: "Controles formulario HTML",
    component: "/event/capture",
  },
  {
    key: "admin-client",
    name: "Clientes",
    component: "/admin/client",
  },
  {
    key: "admin-account",
    name: "Cuentas",
    component: "/admin/account",
  },
];

const AdminScreen = () => {
  const [selectedOption, setSelectedOption] = useState("/event/capture");

  const getContext = () => {
    switch (selectedOption) {
      case "/event/capture":
        return <EventCapture />;

      // case "/admin/client":
      //   return <Client />;

      // case "/admin/account":
      //   return <Account />;

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
