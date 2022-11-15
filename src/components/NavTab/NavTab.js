import React from "react";

import "./NavTab.css";

function NavTab() {
  return (
    <section className="section navTab">
    <h2 className="section__title">О проекте</h2>
    <div className="table">
      <div className="table__cell">
        <h3 className="table__heading">
          Дипломный проект включал 5 этапов
        </h3>
        <p className="table__text">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и&nbsp;финальные доработки.
        </p>
      </div>
      <div className="table__cell">
        <h3 className="table__heading">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="table__text">
          У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые
          нужно было соблюдать, чтобы успешно защититься.
        </p>
      </div>
    </div>
    <div className="infographics">
      <div className="infographics-box infographics-box_back-end ">
        <p className="infographics-box__period infographics-box__period_back-end">
          1 неделя
        </p>
        <p className="infographics-box__type">Back-end</p>
      </div>
      <div className="infographics-box">
        <p className="infographics-box__period">4 недели</p>
        <p className="infographics-box__type">Front-end</p>
      </div>
    </div>
  </section>
  );
}

export default NavTab;