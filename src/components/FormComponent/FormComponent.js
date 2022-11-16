import React from "react";
import { Link } from "react-router-dom";
import "./FormComponent.css";
import Header from "../Header/Header";

function FormComponent(props) {
  return (
    <section className="form-component">
      <div className="form__body">
        <Header class="header_form" />
        <form className="form" name="regist">
          <h2 className="form__heading">{`${props.textHeader}`}</h2>
          <div className="input-box">
            <>{props.children}</>
          </div>
          <button
            className="form__button-submit button"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              console.log(2)
              props.onSubmit();
            }}
          >
            {`${props.textButton}`}
          </button>
        </form>
        <p className="form__description">
          {`${props.textDescription}`}{" "}
          <Link className="form__description-link" to={`${props.url}`}>
            {`${props.textDescriptionLink}`}
          </Link>
        </p>
      </div>
    </section>
  );
}

export default FormComponent;
