import React from "react";
import done from "../../images/registDone.png";
// import bad from "../../images/registError.png";
import "./Modal.css";

function Modal(props) {
  return (
    <section className="popup_opened">
      <div className="popup__background"></div>
      <div className="popup__body">
        <button className="popup-close button" type="button" onClick={()=> props.close()}/>
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

export default Modal;
