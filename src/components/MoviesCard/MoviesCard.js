import React from "react";
import "./MoviesCard.css";

import poster from '../../images/lebovski.jpg'


function MoviesCard(props) {

  function conversTime(mins) {
    let hours = Math.trunc(mins/60); //удаление дробной части без округления
    let minutes = mins % 60; //возвращает целый остаток от деления левого операнда на правый
    return hours + 'ч' + minutes + 'м'; //получаем конверсию минут в часы
}


  return (
    <li className="movies-card">
<div className="movies-card__description">
    <h2 className="movies-card__title">{props.card.nameRU}</h2>
    <p className="movies-card__duration">{conversTime(props.card.duration)}</p>
</div>
<img className="movies-card__image" src={props.card.image.url} alt= {`Постер ${props.card.nameRU}`}/> 
<button className="movies-card__button movies-card__button_added movies-card__button_remove" type="button" ></button>
{/* //src alt и текст кнопки передаются как пропсы */}
    </li>
  );
}

export default MoviesCard;