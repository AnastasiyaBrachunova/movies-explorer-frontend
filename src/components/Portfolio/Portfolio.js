import React from "react";

import "./Portfolio.css";
import link from "../../images/link_portfolio.svg"





function Portfolio() {
  return (
    <section className="section section_portfolio">
    <h2 className="section__title section__title_portfolio">Портфолио</h2>
    <ul className="portfolio__list">
      <li>
        <a className="link portfolio-link" href="https://github.com/AnastasiyaBrachunova/how-to-learn" target="_blank" rel="noreferrer">
        <p className="portfolio-link__description">Статичный сайт</p>
        <img className="portfolio-link__image" src={link} alt="перейти по ссылке"/>
        </a>
      </li>
      <li>
      <a className="link portfolio-link" href="https://github.com/AnastasiyaBrachunova/how-to-learn" target="_blank" rel="noreferrer">
        <p className="portfolio-link__description">Адаптивный сайт</p>
        <img className="portfolio-link__image" src={link} alt="перейти по ссылке"/>
        </a>
      </li>
      <li>
      <a className="link portfolio-link" href="https://github.com/AnastasiyaBrachunova/how-to-learn" target="_blank" rel="noreferrer">
        <p className="portfolio-link__description">Одностраничное приложение</p>
        <img className="portfolio-link__image" src={link} alt="перейти по ссылке"/>
        </a>
      </li>
    </ul>
</section>
  );
}

export default Portfolio;