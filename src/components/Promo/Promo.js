import React from "react";

import "./Promo.css";
import planet from "../../images/World_logo.svg";

function Promo() {
  const scroll = () => {
    window.scroll({ top: 650 });
  };

  return (
    <section className="cover">
      <div className="cover__title-box">
        <h1 className="cover__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <p className="cover__subscribe">
          Листайте ниже, чтобы узнать больше про этот <br /> проект и его
          создателя.
        </p>
        <button className="button cover__link" onClick={() => scroll()}>
          Узнать больше
        </button>
      </div>
      <img className="cover__image" src={planet} alt="Web-планета" />
    </section>
  );
}

export default Promo;
