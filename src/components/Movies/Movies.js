import React, { useEffect, useState, useContext } from "react";
import "./Movies.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BoxTypeMovies from "../BoxTypeMovies/BoxTypeMovies";
import Navigation from "../Navigation/Navigation";
import NavProfile from "../NavProfile/NavProfile";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useHistory } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

function Movies(props) {
  const history = useHistory();
  const currentUser = useContext(CurrentUserContext);
  const isMovies = history.location.pathname === "/movies";
  const isSavedMovies = history.location.pathname === "/saved-movies";
  const [searchMovie, setSearchMovie] = useState("");

  const [shortMovie, setShortMovie] = useState(
    localStorage.getItem("shortMoviesToggle")
      ? JSON.parse(localStorage.getItem("shortMoviesToggle"))
      : false
  );
  const [findMovies, setFindMovies] = useState([]);
  const [isClicked, setIsClicked] = useState([]);

  useEffect(() => {
    if (isMovies) {
      localStorage.setItem("shortMoviesToggle", JSON.stringify(shortMovie));
      searchMovie.length > 0 &&
        localStorage.setItem("searchMovieValue", searchMovie);
    }
  }, [searchMovie, shortMovie]);

  useEffect(() => {
    if (isSavedMovies) {
      setFindMovies(props.movies);
    }
  }, [props.movies]);

  const handleSearch = (movieArray) => {
    const movies = movieArray ? movieArray : props.movies;
    const filteredBySearch = movies.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(searchMovie.toLowerCase());
    });
    setFindMovies(filteredBySearch);
    setIsClicked(["off"]);
    // sendToLocalFileredMovie(filteredBySearch)
    return filteredBySearch;
  };

  useEffect(() => {
    if (
      isMovies &&
      localStorage.getItem("searchMovieValue") &&
      localStorage.getItem("searchMovieValue").length > 0
    ) {
      setSearchMovie(localStorage.getItem("searchMovieValue"));

      setShortMovie(localStorage.getItem("shortMoviesToggle") === "true");
    } else if (isSavedMovies) {
      setSearchMovie("");
      setShortMovie(false);
    }

    const filteredMovieLocal = JSON.parse(
      localStorage.getItem("filteredMovie")
    );

    if (isMovies && filteredMovieLocal && filteredMovieLocal.length >= 0) {
      setIsClicked(["off"]);
      setFindMovies(filteredMovieLocal);
    }
  }, [isMovies, isSavedMovies]);

  const sendToLocalFileredMovie = () => {
    localStorage.setItem("filteredMovie", JSON.stringify(findMovies));
  };

  const isOwnCards = findMovies.filter(
    (item) => item.owner === currentUser._id
  );

  return (
    <>
      <Header sendToLocalFileredMovie={() => sendToLocalFileredMovie()}>
        <BoxTypeMovies
          sendToLocalFileredMovie={() => sendToLocalFileredMovie()}
        />
        <div className="swith-component">
          <NavProfile
            sendToLocalFileredMovie={() => sendToLocalFileredMovie()}
          />
        </div>
        <Navigation sendToLocalFileredMovie={() => sendToLocalFileredMovie()} />
      </Header>
      <SearchForm
        searchMovie={searchMovie}
        handleSearch={async () => {
          props.movies.length === 0
            ? handleSearch(await props.getBeatsMovies())
            : handleSearch();
        }}
        setSearchMovie={setSearchMovie}
        shortMovie={shortMovie}
        setShortMovie={() => {
          setShortMovie(!shortMovie);
          !shortMovie
            ? setFindMovies(
                handleSearch().filter((item) => item.duration <= 40)
              )
            : setFindMovies(handleSearch());
        }}
        findMovies={isClicked.length === 0}
      />

      {props.isLoading ? (
        <Preloader />
      ) : (
        <>
          {/* BeatsMovies */}
          {isMovies && isClicked.length === 0 ? (
            <div className="movies__messageBlock">
              Пожалуйста, введите название фильма
            </div>
          ) : findMovies.length > 0 ? (
            isMovies ? (
              <MoviesCardList
                movies={findMovies}
                savedMovies={props.savedMovies}
                setSavedMovies={props.setSavedMovies}
                setModal={props.setModal}
                setError={props.setError}
              />
            ) : null
          ) : (
            <div className="movies__messageBlock">Ничего не найдено</div>
          )}

          {/* SavedMovies */}
          {isSavedMovies ? (
            isOwnCards.length > 0 ? (
              <MoviesCardList
                movies={isOwnCards}
                savedMovies={props.savedMovies}
                setSavedMovies={props.setSavedMovies}
                setModal={props.setModal}
                setError={props.setError}
              />
            ) : (
              <div className="movies__messageBlock">Ничего не найдено</div>
            )
          ) : null}
        </>
      )}

      <Footer />
    </>
  );
}

export default Movies;
