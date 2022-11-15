import React from "react";
import {  useHistory  } from 'react-router-dom'; 

import "./PageNotFound.css";
import NotFound from "../../images/404.svg";

function PageNotFound() {

  const history = useHistory(); 



  return (
    <div className="not-found">
      <div className="not-found__box-back">
        <img className="not-found__image" src={NotFound} alt="" />
        <p className="title__not-found">Страница не найдена</p>
      </div>
        <button className="button not-found__button not-found__title"
         onClick={() => history.goBack()}
        >
          Назад
        </button>
     
    </div>
  );
}

export default PageNotFound;
