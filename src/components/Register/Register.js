import React, { useRef, useState } from "react";
import "./Register.css";
import FormComponent from "../FormComponent/FormComponent";
import { register } from "../../utils/UserAuth";
import Modal from "../Modal/Modal";

function Register() {
  // const refName = useRef('');
  // const refEmail = useRef('');
  // const refPassword = useRef('');

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = () => {
    register(name, email, password).then((res) => {
      if (res._id) {
        setOpenModal(true)
      }
    });
  };

  return (
    <>
      <FormComponent
        textHeader="Добро пожаловать!"
        textButton="Зарегистрироваться"
        textDescription="Уже зарегистрированы?"
        textDescriptionLink="Войти"
        url="/signin"
        onSubmit={() => handleSubmit()}
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
            // ref={refName}
            onChange={(e) => {
              e.preventDefault();
              setName(e.target.value);
            }}
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
            // ref={refEmail}
            onChange={(e) => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
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
            // ref={refPassword}
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
          />
          <span
            id="password-error"
            className="form__input-error password-error"
          >
            Что-то пошло не так
          </span>
        </div>
      </FormComponent>

      {openModal && <Modal close={() => setOpenModal(false)}/>}
    </>
  );
}

export default Register;
