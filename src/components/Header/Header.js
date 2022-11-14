import React from "react";
import { Link } from 'react-router-dom'; 

import "./Header.css";
import logo from "../../images/logo.svg";
// import Navigation from "../Navigation/Navigation";
// import NavProfile from "../NavProfile/NavProfile";

function Header(props) {
  
  return (
    <header className="header">
      <Link to="/">
      <img className="header__logo" src={logo} alt="Лого" />
      </Link>
      <>{props.children}</>
    </header>
  );
}

export default Header;
