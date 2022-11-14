import React from "react";
import { Link } from 'react-router-dom'; 


import "./Footer.css";

function Footer() {
  return (
    <footer className="section section_footer">
      <div className="section__title section__title_footer">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </div>
      <div className="footer__info">
        <p className="footer__copyright">&copy; 2022</p>
        <div className="footer__links">
          <Link
            to="https://practicum.yandex.ru/profile/web/"
            target="_blank"
            className="footer__link link"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </Link>

          <Link
            to="https://github.com/AnastasiyaBrachunova"
            target="_blank"
            className="footer__link link"
            rel="noreferrer"
          >
            Githab
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
