import React from "react";
import { useHistory } from "react-router-dom";

import "./NavProfile.css";
import profileIcon from "../../images/icon__COLOR_icon-main.svg";

function NavProfile(props) {
  const history = useHistory();
  return (
    <div className="box-account">
      <button
        className="box-account__link"
        to="/profile"
        onClick={(e) => {
          e.preventDefault();
          history.push("/profile");
          props.sendToLocalFileredMovie && props.sendToLocalFileredMovie();
        }}
      >
        Аккаунт
      </button>
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
