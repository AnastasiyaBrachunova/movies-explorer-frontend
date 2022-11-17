import React from "react";

import "./Techs.css";

function Techs() {
  return (
    <section className="section section_tools">
      <h2 className="section__title">Технологии</h2>
      <div className="tools">
        <h3 className="tools__title">7 технологий</h3>
        <p className="tools__description">
          На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые
          применили в&nbsp;дипломном проекте.
        </p>
      </div>
      <ul className="tools__list">
        <li className="tools__cell">HTML</li>
        <li className="tools__cell">CSS</li>
        <li className="tools__cell">JS</li>
        <li className="tools__cell">React</li>
        <li className="tools__cell">Git</li>
        <li className="tools__cell">Express.js</li>
        <li className="tools__cell">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
