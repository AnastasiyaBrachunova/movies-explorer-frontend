import React from "react";
import { Link } from "react-router-dom";

import "./BoxTypeMovies.css";

function BoxTypeMovies() {
  return (
    <div className="box-moveis">
      <Link className="box-moveis__movie" href="/movies">
        Фильмы
      </Link>
      <Link className="box-moveis__stored-movie" href="/movies/me">
        Сохранённые фильмы
      </Link>
    </div>
  );
}

export default BoxTypeMovies;
