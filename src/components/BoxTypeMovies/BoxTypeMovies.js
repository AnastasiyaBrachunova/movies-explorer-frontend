import React from "react";
import { useHistory } from "react-router-dom";

import "./BoxTypeMovies.css";

function BoxTypeMovies(props) {
  const history = useHistory();

  return (
    <div className="box-moveis">
      <button
        className="box-moveis__movie"
        onClick={() => {
          history.push("/movies");
        }}
      >
        Фильмы
      </button>
      <button
        className="box-moveis__movie"
        onClick={() => {
          history.push("/saved-movies");
          props.sendToLocalFileredMovie && props.sendToLocalFileredMovie();
        }}
      >
        Сохранённые фильмы
      </button>
    </div>
  );
}

export default BoxTypeMovies;
