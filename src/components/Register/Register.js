import React from "react";
import "./Register.css";
import logo from "../../images/logo.svg";

function Register() {
  return (
    <section className="register">
      <div className="form__body">
        <img className="form__logo" src={logo} alt="logo" />
        <form className="form" name="regist">
          <h2 className="form__heading">Добро пожаловать!</h2>
          <div className="input-box">
            <div className="input-box__element">
              <p className="form__input-name">Имя </p>
            <input
              className="form__input form__input_nameInfo"
              id="name"
              name="name"
              type="text"
              autocomplete="off"
                            placeholder=""
              required
            />
            <span id="name-error" className="form__input-error name-error">
              Что-то пошло не так
            </span>
            </div>
            <div className="input-box__element">
            <p className="form__input-name">E-mail </p>
            <input
              className="form__input form__input_emailInfo"
              id="email"
              name="email"
              type="email"
              autocomplete="off"
                            placeholder=""
              required
            />

            </div>
            <div className="input-box__element">
            <p className="form__input-name">Пароль</p>

            <input
              className="form__input form__input_passwordInfo"
              id="password"
              name="password"
              type="password"
              autocomplete="off"
                            placeholder=""
              required
            />
            <span
              id="password-error"
              className="form__input-error password-error"
            >
              Что-то пошло не так
            </span>
            </div>
          </div>
          {/* <>{props.children}</>  сюда потом вставляю инпуты и спаны  */}

          <button
            className="form__button-submit button"
            type="submit"
            value="Зарегестрироваться"
          >
            Зарегестрироваться
          </button>
        </form>
        <p className="form__description">Ещё не зарегистрированы? <a className="form__description-link" href="*">Регистрация</a></p>

      </div>
    </section>
  );
}

export default Register;
