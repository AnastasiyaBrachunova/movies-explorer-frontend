import React from "react";
import "./SavedMovies.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BoxTypeMovies from "../BoxTypeMovies/BoxTypeMovies";
import Navigation from "../Navigation/Navigation";
import NavProfile from "../NavProfile/NavProfile";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {
  return (
    <>
      <Header>
        <BoxTypeMovies />
        <div className="swith-component">
          <NavProfile />
        </div>
        <Navigation />
      </Header>
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </>
  );
}

export default SavedMovies;
