import React from "react";
import { Link } from 'react-router-dom'; 

import "./PageNotFound.css";
import NotFound from "../../images/404.svg";

function PageNotFound() {
  return (
    <div className="not-found">
      <div className="not-found__box-back">
        <img className="not-found__image" src={NotFound} alt="" />
        <p className="title__not-found">Страница не найдена</p>
      </div>
        <Link className="button not-found__button not-found__title"
          to="/signin"
        >
          Назад
        </Link>
     
    </div>
  );
}

export default PageNotFound;
