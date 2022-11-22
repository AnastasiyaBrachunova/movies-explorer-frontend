import React from "react";
import { useHistory } from "react-router-dom";

import "./Register.css";
import FormComponent from "../FormComponent/FormComponent";
import useInput from "../../utils/validation";

function Register(props) {
  const history = useHistory();
  const isSignIn = history.location.pathname === "/signin";

  const emailInput = useInput("", {
    isEmpty: true,
    minLength: 6,
    isEmail: true,
    maxLength: 20,
  });
  const nameInput = useInput("", {
    isEmpty: true,
    minLength: 2,
    maxLength: 40,
  });
  const passwordInput = useInput("", {
    isEmpty: true,
    minLength: 6,
    maxLength: 40,
  });

  return (
    <>
      <FormComponent
        textHeader="Добро пожаловать!"
        textButton={isSignIn ? "Войти" : "Зарегистрироваться"}
        textDescription={
          isSignIn ? "Ещё не зарегистрированы?" : "Уже зарегистрированы?"
        }
        textDescriptionLink={isSignIn ? "Регистрация" : "Войти"}
        url={isSignIn ? "/signup" : "/signin"}
        onSubmit={
          isSignIn
            ? () => props.handleSubmit(emailInput.value, passwordInput.value)
            : () =>
                props.handleSubmit(
                  nameInput.value,
                  emailInput.value,
                  passwordInput.value
                )
        }
        disabledSubmit={
          isSignIn
            ? !emailInput.inputValid || !passwordInput.inputValid
            : !emailInput.inputValid ||
              !nameInput.inputValid ||
              !passwordInput.inputValid
        }
      >
        {isSignIn ? null : (
          <>
            <div className="input-box__element">
              <p className="form__input-name">Имя</p>
              <input
                className="form__input form__input_nameInfo"
                id="name"
                name="name"
                type="text"
                autoComplete="off"
                minLength="2"
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
            {!nameInput.isEmpty &&
              nameInput.isDirty &&
              nameInput.minLengthError && (
                <span id="name-error" className="form__input-error name-error">
                  Введите минимум 2 символа
                </span>
              )}
            {!nameInput.isEmpty &&
              nameInput.isDirty &&
              nameInput.maxLengthError && (
                <span id="name-error" className="form__input-error name-error">
                  Вы превысили лимит знаков
                </span>
              )}
          </>
        )}

        <div className="input-box__element">
          <p className="form__input-name">E-mail</p>
          <input
            className="form__input form__input_emailInfo"
            id="email"
            name="email"
            type="email"
            autoComplete="off"
            minLength="6"
            maxLength="40"
            required
            value={emailInput.value}
            onChange={(e) => emailInput.onChange(e)}
            onBlur={(e) => emailInput.onBlur(e)}
          />
        </div>
        {emailInput.isDirty && emailInput.isEmpty && (
          <span id="name-error" className="form__input-error name-error">
            Поле не моет быть пустым
          </span>
        )}
        {!emailInput.isEmpty &&
          emailInput.isDirty &&
          emailInput.minLengthError && (
            <span id="name-error" className="form__input-error name-error">
              Введите минимум 6 символов
            </span>
          )}
        {!emailInput.isEmpty &&
          emailInput.isDirty &&
          emailInput.maxLengthError && (
            <span id="name-error" className="form__input-error name-error">
              Вы превысили лимит знаков
            </span>
          )}
        {!emailInput.isEmpty && !emailInput.minLengthError && emailInput.isDirty && emailInput.emailError && (
          <span id="name-error" className="form__input-error name-error">
            Некорректный email
          </span>
        )}
        <div className="input-box__element">
          <p className="form__input-name">Пароль</p>

          <input
            className="form__input form__input_passwordInfo"
            id="password"
            name="password"
            type="password"
            autoComplete="off"
            minLength="6"
            maxLength="40"
            required
            value={passwordInput.value}
            onChange={(e) => passwordInput.onChange(e)}
            onBlur={(e) => passwordInput.onBlur(e)}
          />
        </div>
        {passwordInput.isDirty && passwordInput.isEmpty && (
          <span id="name-error" className="form__input-error name-error">
            Поле не моет быть пустым
          </span>
        )}
        {!passwordInput.isEmpty &&
          passwordInput.isDirty &&
          passwordInput.minLengthError && (
            <span id="name-error" className="form__input-error name-error">
              Введите минимум 6 символов
            </span>
          )}
        {!passwordInput.isEmpty &&
          passwordInput.isDirty &&
          passwordInput.maxLengthError && (
            <span id="name-error" className="form__input-error name-error">
              Вы превысили лимит знаков
            </span>
          )}
      </FormComponent>
    </>
  );
}

export default Register;
