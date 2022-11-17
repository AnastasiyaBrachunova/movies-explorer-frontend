import React from "react";
import { Link } from "react-router-dom";

import "./NavProfile.css";
import profileIcon from "../../images/icon__COLOR_icon-main.svg";

function NavProfile() {
  return (
    <div className="box-account">
      <Link className="box-account__link" to="/profile">
        Аккаунт
      </Link>
      <button className="box-account__button-profile">
        <img
          className="box-account__image"
          src={profileIcon}
          alt="аккаунт"
        ></img>
      </button>
    </div>
  );
}

export default NavProfile;
