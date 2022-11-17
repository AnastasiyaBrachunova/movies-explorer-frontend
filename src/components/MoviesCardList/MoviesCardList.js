import React, { useState, useContext, useEffect } from "react";
import "./MoviesCardList.css";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import MoviesCards from "../MoviesCard/MoviesCard";
import { useHistory } from "react-router-dom";

function MoviesCardList(props) {
  const currentUser = useContext(CurrentUserContext);
  const history = useHistory();

  const isMoviesPath = history.location.pathname === "/movies";
  const isSavedMoviesPath = history.location.pathname === "/saved-movies";
  const baseCards = () => {
    if (widthScreen >= 1280) {
      return 12;
    }
    if (widthScreen < 1280 && widthScreen >= 768) {
      return 8;
    }
    if (widthScreen < 768) {
      return 5;
    }
    return 12;
  };

  const widthScreen = window.screen.width;
  const [baseRender, setBaseRender] = useState(baseCards());

  const addMovies = () => {
    if (widthScreen >= 1280) setBaseRender(baseRender + 3);
    if (widthScreen < 1280) setBaseRender(baseRender + 2);
  };

  useEffect(() => {
    setBaseRender(baseCards());
  }, [isMoviesPath, isSavedMoviesPath]);

  const renderMovies = props.movies && props.movies.slice(0, baseRender);

  return (
    <section className="section section_card-list">
      <ul className="movie-gallery">
        {renderMovies &&
          renderMovies.length > 0 &&
          renderMovies.map((movie) => {
            const isOwner = movie.owner === currentUser._id;

            //BeatsMovies
            if (isMoviesPath) {
              const findMovie = props.savedMovies.filter(
                (item) => item.owner === currentUser._id
              );

              return (
                <MoviesCards
                  setSavedMovies={props.setSavedMovies}
                  savedMovies={props.savedMovies}
                  key={movie.id}
                  card={movie}
                  setModal={props.setModal}
                  setError={props.setError}
                  currentUser={currentUser}
                  isOwner={findMovie.find((item) => item.movieId === movie.id)}
                />
              );
            }

            //Saved-Movies
            if (isSavedMoviesPath && isOwner) {
              return (
                <MoviesCards
                  setSavedMovies={props.setSavedMovies}
                  savedMovies={props.savedMovies}
                  key={movie.id}
                  card={movie}
                  setModal={props.setModal}
                  setError={props.setError}
                  currentUser={currentUser}
                />
              );
            }
          })}
      </ul>
      {renderMovies.length <= baseRender && props.movies > renderMovies ? (
        <button
          className="button button__more-movies"
          onClick={() => addMovies()}
        >
          Ещё
        </button>
      ) : null}
    </section>
  );
}

export default MoviesCardList;
