import React from "react";
import "./Login.css";
import FormComponent from "../FormComponent/FormComponent";

function Login() {
  return (
    <FormComponent
      textHeader="Рады видеть!"
      textButton="Войти"
      textDescription="Ещё не зарегистрированы?"
      textDescriptionLink="Регистрация"
      url="/signup"
    >
      <div className="input-box__element">
        <p className="form__input-name">E-mail</p>
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
        <span id="password-error" className="form__input-error password-error">
          Что-то пошло не так
        </span>
      </div>
    </FormComponent>
  );
}

export default Login;
