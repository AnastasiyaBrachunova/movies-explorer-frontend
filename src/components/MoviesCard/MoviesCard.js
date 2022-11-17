import React, { useEffect, useState } from "react";
import "./MoviesCard.css";
import { mainApi } from "../../utils/MainApi";
import saved from "../../images/icon__add__card__button.svg";
import remove from "../../images/icon__removie__card__button.svg";
import { useHistory } from "react-router-dom";


function MoviesCard(props) {
  const baseUrl = "https://api.nomoreparties.co";
  const history = useHistory();

  const isMoviesPath = history.location.pathname === "/movies";
  const [isSaved, setIsSaved] = useState(false);

  const conversTime = (mins) => {
    let hours = Math.trunc(mins / 60); //удаление дробной части без округления
    let minutes = mins % 60; //возвращает целый остаток от деления левого операнда на правый
    return hours + "ч " + minutes + "м"; //получаем конверсию минут в часы
  };

  const openTrailer = (trailerLink) => {
    window.open(trailerLink);
  };

  useEffect(() => {
    const findSaved =
      props.savedMovies &&
      props.savedMovies.find((item) => item.movieId === props.card.id && item.owner === props.currentUser._id);
    setIsSaved(findSaved);
  }, [props.savedMovies]);

  const addLikeListMovie = (card) => {
    const request = {
      movieId: card.id,
      country: card.country,
      director: card.director,
      duration: card.duration,
      year: card.year,
      description: card.description,
      image: `${baseUrl}${card.image.url}`,
      trailerLink: card.trailerLink,
      nameRU: card.nameRU,
      nameEN: card.nameEN,
      thumbnail: `${baseUrl}${card.image.formats.thumbnail.url}`,
      owner: props.currentUser._id
    };

    mainApi
      .addLikeMovieCard(request)
      .then((res) => {
        setIsSaved(res._id);
        props.setSavedMovies &&
          props.setSavedMovies([...props.savedMovies, res]);
      })
      .catch((err) => {
        console.log(err);
        props.setModal();
        props.setError();
      });
  };

  const removeMovie = (_id) => {
    mainApi
      .delInitialMovie(_id)
      .then((res) => {
        props.setSavedMovies &&
          props.setSavedMovies(
            props.savedMovies.filter((item) => item._id !== res._id)
          );
      })
      .catch((err) => {
        console.log(err);
        props.setModal();
        props.setError();
      });
  };

  return (
     <li className="movies-card">
      <div className="movies-card__description">
        <h2 className="movies-card__title">{props.card.nameRU}</h2>
        <p className="movies-card__duration">
          {conversTime(props.card.duration)}
        </p>
      </div>
      <img
        className="movies-card__image"
        src={
          isMoviesPath
            ? `${baseUrl}${props.card.image.url}`
            : `${props.card.image}`
        }
        alt={`Постер ${props.card.nameRU}`}
        onClick={() => openTrailer(props.card.trailerLink)}
      />
      <button
        className={`movies-card__button ${
          props.isOwner  ? "movies-card__button_added" : ""
        }`}
        type="button"
        onClick={
          isMoviesPath
            ? props.isOwner
              ? () => removeMovie(isSaved._id)
              : () => addLikeListMovie(props.card)
            : () => removeMovie(props.card._id)
        }
      >
        {isMoviesPath ? (
          props.isOwner ? (
            <img src={saved} alt="saved" />
          ) : (
            "Сохранить"
          )
        ) : (
          <img src={remove} alt="remove" />
        )}
      </button>
    </li>
  );
}

export default MoviesCard;
