import React from "react";
import done from "../../images/registDone.png";
// import bad from "../../images/registError.png";
import "./ErrorModal.css";

function ErrorModal() {
  return (
    <section className="popup_opened">
      <div className="popup__body">
        <button className="popup-close button" type="button" />
        <div className="modal">
          <img className="regist-img" src={done} alt="Результат регистрации" />
          <p className="regist-caption">
            Операция прошла успешно!
          </p>
        </div>
      </div>
    </section>
  );
}

export default ErrorModal;
