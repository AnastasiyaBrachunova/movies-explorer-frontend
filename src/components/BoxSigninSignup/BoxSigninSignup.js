import React from "react";
import { Link } from "react-router-dom";

import "./BoxSigninSignup.css";

function BoxSigninSignup() {
  return (
    <div className="box-switch">
      <Link className="box-switch__signup" to="/signup">
        Регистрация
      </Link>
      <Link className="box-switch__signin" to="/signin">
        Войти
      </Link>
    </div>
  );
}

export default BoxSigninSignup;
