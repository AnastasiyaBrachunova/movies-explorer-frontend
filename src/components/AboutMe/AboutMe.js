import React from "react";

import "./AboutMe.css";
import avatar from "../../images/my_foto.svg";

function AboutMe() {
  return (
    <section className="section section_about-me">
      <h2 className="section__title">Студент</h2>
      <div className="student">
        <div className="info">
          <div className="info__title">Виталий</div>
          <div className="info__subtitle">Фронтенд-разработчик, 30 лет</div>
          <div className="info__description">
            Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет
            экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю
            слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить.
            С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;.
            После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься
            фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
          </div>
          <a
            className="link info__link"
            href="https://github.com/AnastasiyaBrachunova"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img className="student__image" src={avatar} alt="Мое фото" />
      </div>
    </section>
  );
}

export default AboutMe;
