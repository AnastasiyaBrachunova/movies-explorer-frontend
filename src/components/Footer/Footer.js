import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <footer className="section section_footer">
      <div className=" section__title_footer">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </div>
      <div className="footer__info">
        <p className="footer__copyright">&copy; 2022</p>
        <div className="footer__links">
          <a
            href="https://practicum.yandex.ru/profile/web/"
            target="_blank"
            className="footer__link link"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>

          <a
            href="https://github.com/AnastasiyaBrachunova"
            target="_blank"
            className="footer__link link"
            rel="noreferrer"
          >
            Githab
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
