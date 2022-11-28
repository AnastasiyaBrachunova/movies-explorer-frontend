import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";

function Header(props) {
  return (
    <header className={`header ${props.class}`}>
      <Link to="/">
        <img
          className="header__logo"
          src={logo}
          alt="Лого"
          onClick={() =>
            props.sendToLocalFileredMovie && props.sendToLocalFileredMovie()
          }
        />
      </Link>
      <>{props.children}</>
    </header>
  );
}

export default Header;
