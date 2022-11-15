import React from "react";
import "./Main.css";

import AboutMe from "../AboutMe/AboutMe";
import Techs from "../Techs/Techs";
import NavTab from "../NavTab/NavTab";
import Portfolio from "../Portfolio/Portfolio";
import Promo from "../Promo/Promo";

function Main() {
  return (
    <>
      <Promo />
      <NavTab />
      <Techs />
      <AboutMe />
      <Portfolio />
    </>
  );
}

export default Main;
