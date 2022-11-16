import React, { useRef, useState } from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import loupe from "../../images/search_icon.svg";
import find from '../../images/find-loupe.svg'
import moviesApi from "../../utils/MoviesApi";


function SearchForm(props) {

  const searchInput = useRef('');


  return (
    <section className="section section_search">
      <div className="division-line">
      <form className="form-search">
        <div className="form-search__box">
          <img className="form-search__icon" src={loupe} alt="Поиск" />
          <input
            className="form-search__input"
            type="search"
            name="q"
            placeholder="Фильм"
            ref={searchInput}
            onChange={(e)=> props.setSearchMovieValue(e.target.value)}
            required min="3" max="25"
          />
          <button className="form-search__submit button" type="submit" value="">
            <img className="form-search__button-img" src={find} alt="Поиск" />
          </button>
        </div>
        <FilterCheckbox />
      </form>
      </div>
    </section>
  );
}

export default SearchForm;
