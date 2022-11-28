import React from "react";
import "./Main.css";

import Header from "../Header/Header";
import BoxSigninSignup from "../BoxSigninSignup/BoxSigninSignup";
import BoxTypeMovies from "../BoxTypeMovies/BoxTypeMovies";
import Navigation from "../Navigation/Navigation";
import NavProfile from "../NavProfile/NavProfile";
import Footer from "../Footer/Footer";
import AboutMe from "../AboutMe/AboutMe";
import Techs from "../Techs/Techs";
import NavTab from "../NavTab/NavTab";
import Portfolio from "../Portfolio/Portfolio";
import Promo from "../Promo/Promo";

function Main(props) {
  return (
    <>
      {props.loggedIn ? 
         <Header>
         <BoxTypeMovies
         />
         <div className="swith-component">
           <NavProfile />
         </div>
         <Navigation />
       </Header>
      :<Header>
        <BoxSigninSignup />
      </Header>}
      <Promo />
      <NavTab />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </>
  );
}

export default Main;
