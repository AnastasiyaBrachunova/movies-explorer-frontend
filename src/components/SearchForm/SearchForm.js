import React, { useEffect, useRef, useState } from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import loupe from "../../images/search_icon.svg";
import find from "../../images/find-loupe.svg";
import { useHistory } from "react-router-dom";

function SearchForm(props) {
  const history = useHistory();
  const isMovies = history.location.pathname === "/movies";
  const searchInput = useRef("");

  const [isFill, setIsFill] = useState(false);

  useEffect(() => {
    if (props.searchMovie.length > 0) {
      setIsFill(true);
    } else {
      setIsFill(false);
    }
  }, [props.searchMovie]);

  const searchFormInput = document.querySelector(".form-search__input");

  return (
    <section className="section section_search">
      <div className="division-line">
        <div className="form__content">
          <form
            className="form-search"
            onSubmit={
              isFill
                ? (e) => {
                    e.preventDefault();
                    props.handleSearch();
                  }
                : (e) => {
                    e.preventDefault();
                  }
            }
          >
            <div className="form-search__box">
              <img className="form-search__icon" src={loupe} alt="Поиск" />
              <input
                value={props.searchMovie}
                className="form-search__input"
                type="search"
                name="q"
                placeholder="Фильм"
                ref={searchInput}
                onChange={(e) => {
                  props.setSearchMovie(e.target.value);
                }}
              />
              <button className="form-search__submit button" type="submit">
                <img
                  className="form-search__button-img"
                  src={find}
                  alt="Поиск"
                />
              </button>
            </div>
            <div className="form__validation form__validation_adaptive">
              {isMovies && !isFill && (
                <span className="form__validation__message">
                  Введите название фильма
                </span>
              )}
              {searchFormInput && searchFormInput.validity.tooLong && (
                <span className="form__validation__message">
                  Вы превысили лимит знаков
                </span>
              )}
            </div>
            <FilterCheckbox
              setShortMovie={props.setShortMovie}
              shortMovie={props.shortMovie}
            />
          </form>
          <div className="form__validation">
            {isMovies && !isFill && (
              <span className="form__validation__message">
                Введите название фильма
              </span>
            )}
            {searchFormInput && searchFormInput.validity.tooLong && (
              <span className="form__validation__message">
                Вы превысили лимит знаков
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
