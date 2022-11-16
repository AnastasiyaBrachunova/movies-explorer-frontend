import React from "react";
import { Link } from 'react-router-dom'; 
import "../Register/Register.css";
import "./Profile.css";
import Header from "../Header/Header";
import BoxTypeMovies from "../BoxTypeMovies/BoxTypeMovies";
import NavProfile from "../NavProfile/NavProfile";
import Navigation from "../Navigation/Navigation";

function Profile() {
  return (<>
    <Header>
    <BoxTypeMovies />
    <NavProfile />
    <Navigation />
  </Header>
    <section className="profile section">
      <div className="form__body form__body_profile">
        <form className="form" name="profile">
          <h2 className="form__heading form__heading_profile">Привет, Виталий!</h2> 
          <div className="input-box input__box_profile">
            <div className="input-box__element input-box__element_profile">
              <p className="form__input-name form__input-name_profile">Имя </p>
              <input
                className="form__input form__input_profile form__input_nameInfo"
                id="name"
                name="name"
                type="text"
                autocomplete="off"
                placeholder=""
                required
              />
            </div>
            <div className="input-box__element input-box__element_profile">
              <p className="form__input-name form__input-name_profile">E-mail </p>
              <input
                className="form__input form__input_profile form__input_emailInfo"
                id="email"
                name="email"
                type="email"
                autocomplete="off"
                placeholder=""
                required
              />
            </div>
          </div>
        </form>
        <div className="link-box">
        <button className="profile__add-button" type="submit">
          Редактировать
          </button>
          <Link className="profile__link profile__link_exit" to="/signin">
            Выйти из аккаунта
               </Link>
        </div>
      </div>
    </section>
    </>
  );
}

export default Profile;
