import React from "react";
import "./FilterCheckbox.css";
function FilterCheckbox(props) {
  const disable = props.findMovies && props.findMovies.length === 0

  return (
    <div className="filter-box">
      <label className="checkbox">
        <input
          className="checkbox__input"
          type="checkbox"
          name="shortMovie"
          value="shortMovie"
          disabled={disable}
          checked={props.shortMovie}
          onClick={props.setShortMovie}
        />
        <div
          className={`checkbox__div ${disable ? 'checkbox__div_disable' : ''}`}
         
        ></div>
      </label>
      <p className="checkbox__description">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
