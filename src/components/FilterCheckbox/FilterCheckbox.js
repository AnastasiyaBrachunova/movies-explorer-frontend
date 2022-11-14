import React from "react";
import "./FilterCheckbox.css";
function FilterCheckbox() {
  return (
    <div className="filter-box">
      <label className="checkbox">
        <input
          className="checkbox__input"
          type="checkbox"
          name="shortMovie"
          value="shortMovie"
        />
        <div className="checkbox__div"></div>
      </label>
      <p className="checkbox__description">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
