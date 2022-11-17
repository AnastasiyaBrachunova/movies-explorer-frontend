import React from "react";
import done from "../../images/registDone.png";
import bad from "../../images/registError.png";
import "./Modal.css";

function Modal(props) {
  return (
    <section className={`popup ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__body">
        <button
          className="popup-close button"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            props.onClose();
          }}
        />
        <div className="modal">
          <img
            className="regist-img"
            src={props.onError ? bad : done}
            alt="Статус работы сервера"
          />
          <p className="regist-caption">
            {props.onError
              ? `Что-то пошло не так! Попробуйте еще раз`
              : `Данные получены!`}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Modal;
