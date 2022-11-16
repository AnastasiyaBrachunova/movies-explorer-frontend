import React, { useContext, useEffect, useState } from "react";
import "./Movies.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BoxTypeMovies from "../BoxTypeMovies/BoxTypeMovies";
import Navigation from "../Navigation/Navigation";
import NavProfile from "../NavProfile/NavProfile";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { moviesApi } from "../../utils/MoviesApi";

function Movies(props) {
  // const currentUser = useContext(CurrentUserContext);
  const [searchMovie, setSearchMovie] = useState([]); // стейт получения результатов с инпута

  const getMovies = () => {
    moviesApi.get
      .then((responce) => {
        setSearchMovie(responce.data);
      })
      .catch((err) => console.log("Ошибка получения массива карточек"));
  };

  useEffect(() => {
    getMovies();
  }, []); //

  const [searchMovieValue, setSearchMovieValue] = useState("");

  const filteredMovies = searchMovie.filter((movie) => {
    return movie.name.toLowerCase().includes(searchMovieValue.toLowerCase());
  });

  return (
    <>
      <Header>
        <BoxTypeMovies />
        <div className="swith-component">
          <NavProfile />
        </div>
        <Navigation />
      </Header>
      <SearchForm setSearchMovieValue={setSearchMovieValue} />
      <MoviesCardList movies={props.movies} />
      <Footer />
    </>
  );
}

export default Movies;
