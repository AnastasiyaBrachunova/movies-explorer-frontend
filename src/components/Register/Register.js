import React from "react";
import "./Register.css";
import FormComponent from "../FormComponent/FormComponent";

function Register() {
  return (
    <FormComponent
      textHeader="Добро пожаловать!"
      textButton="Зарегестрироваться"
      textDescription="Уже зарегистрированы?"
      textDescriptionLink="Войти"
      url="/signin"
    >
      <div className="input-box__element">
        <p className="form__input-name">Имя</p>
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

export default Register;
