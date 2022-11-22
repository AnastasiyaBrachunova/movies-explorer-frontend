import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Profile.css";
import Header from "../Header/Header";
import BoxTypeMovies from "../BoxTypeMovies/BoxTypeMovies";
import NavProfile from "../NavProfile/NavProfile";
import Navigation from "../Navigation/Navigation";
import useInput from "../../utils/validation";

function Profile(props) {
  const emailInput = useInput(props.email, {
    isEmpty: true,
    minLength: 6,
    isEmail: true,
    maxLength: 20,
  });

  const nameInput = useInput(props.name, {
    isEmpty: true,
    minLength: 2,
    maxLength: 40,
  });

  const handleSubmit = () => {
    props.onUpdateUser({
      email: emailInput.value,
      name: nameInput.value,
    });
  };

  return (
    <>
      <Header>
        <BoxTypeMovies />
        <NavProfile />
        <Navigation />
      </Header>
      <section className="profile section">
        <div className="form__body form__body_profile">
          <form className="form" name="profile">
            <h2 className="form__heading form__heading_profile">
              Привет, {props.name}!
            </h2>
            <div className="input-box input__box_profile">
              <div className="input-box__element input-box__element_profile">
                <p className="form__input-name form__input-name_profile">
                  Имя{" "}
                </p>
                <input
                  className="form__input form__input_profile form__input_nameInfo"
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="off"
                  maxLength="40"
                  required
                  value={nameInput.value}
                  onChange={(e) => nameInput.onChange(e)}
                  onBlur={(e) => nameInput.onBlur(e)}
                />
              </div>
              {nameInput.isDirty && nameInput.isEmpty && (
                <span id="name-error" className="form__input-error name-error">
                  Поле не может быть пустым
                </span>
              )}
              {nameInput.isDirty && nameInput.minLengthError && (
                <span id="name-error" className="form__input-error name-error">
                  Введите минимум 2 символа
                </span>
              )}
              {nameInput.isDirty && nameInput.maxLengthError && (
                <span id="name-error" className="form__input-error name-error">
                  Вы превысили лимит знаков
                </span>
              )}

              <div className="input-box__element input-box__element_profile">
                <p className="form__input-name form__input-name_profile">
                  E-mail{" "}
                </p>
                <input
                  className="form__input form__input_profile form__input_emailInfo"
                  id="email"
                  name="email"
                  type="email"
                  minLength="2"
                  maxLength="40"
                  required
                  value={emailInput.value}
                  onChange={(e) => emailInput.onChange(e)}
                  onBlur={(e) => emailInput.onBlur(e)}
                />
              </div>
              {emailInput.isDirty && emailInput.isEmpty && (
                <span id="name-error" className="form__input-error name-error">
                  Поле не может быть пустым
                </span>
              )}
              {emailInput.isDirty && emailInput.minLengthError && (
                <span id="name-error" className="form__input-error name-error">
                  Введите минимум 6 символов
                </span>
              )}
              {emailInput.isDirty && emailInput.maxLengthError && (
                <span id="name-error" className="form__input-error name-error">
                  Вы превысили лимит знаков
                </span>
              )}
              {emailInput.isDirty && emailInput.emailError && (
                <span id="name-error" className="form__input-error name-error">
                  Некорректный email
                </span>
              )}
            </div>
          </form>
          <div className="link-box">
            <button
              disabled={
                !emailInput.inputValid ||
                !nameInput.inputValid ||
                (props.email === emailInput.value &&
                  props.name === nameInput.value)
              }
              className="profile__add-button"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              Редактировать
            </button>
            <Link
              className="profile__link profile__link_exit"
              to="/"
              onClick={() => {
                props.setLoggedIn();
                localStorage.clear();
              }}
            >
              Выйти из аккаунта
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
