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
import { ThereDices } from "../exercises/ThreeDices";
import { PageTitle } from "../exercises/PageTitle";

import { menuData } from "../../data/Data";
import { ListSum } from "../exercises/ListSum";

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

      case "/three/dices":
        return <ThereDices />;

      case "/list/sum":
        return <ListSum />;

      case "/page/title":
        return <PageTitle />;

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
          data={menuData}
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
