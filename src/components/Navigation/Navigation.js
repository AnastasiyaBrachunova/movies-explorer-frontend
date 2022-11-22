import { Link } from "react-router-dom";
import React, { useState } from "react";
import NavProfile from "../NavProfile/NavProfile";
import "./Navigation.css";

function Navigation(props) {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <div
        className={
          menuActive
            ? "menu-icon__close menu-icon__close"
            : "menu-icon menu-icon_disable"
        }
        onClick={
          menuActive ? () => setMenuActive(false) : () => setMenuActive(true)
        }
      />
      <nav className={menuActive ? "menu__body active" : "menu__body"}>
        <ul className="menu__list">
          <li>
            <Link
              className="menu__link"
              to="/"
              onClick={() =>
                props.sendToLocalFileredMovie && props.sendToLocalFileredMovie()
              }
            >
              Главная
            </Link>
          </li>
          <li>
            <Link className="menu__link" to="/movies">
              Фильмы
            </Link>
          </li>
          <li>
            <Link
              className="menu__link"
              to="/saved-movies"
              onClick={() =>
                props.sendToLocalFileredMovie && props.sendToLocalFileredMovie()
              }
            >
              Сохранённые фильмы
            </Link>
          </li>
          <li>
            <NavProfile />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
