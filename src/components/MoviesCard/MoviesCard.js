import React from "react";
import "./MoviesCard.css";

import poster from '../../images/lebovski.jpg'


function MoviesCard() {
  return (
    <li className="movies-card">
<div className="movies-card__description">
    <h2 className="movies-card__title">Большой Лебовски</h2>
    <p className="movies-card__duration">40 минут</p>
</div>
<img className="movies-card__image" src={poster} alt="Poster"/> 
<button className="movies-card__button movies-card__button_added movies-card__button_remove" type="button" ></button>
{/* //src alt и текст кнопки передаются как пропсы */}
    </li>
  );
}

export default MoviesCard;