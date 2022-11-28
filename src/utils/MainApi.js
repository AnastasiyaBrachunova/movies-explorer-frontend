class MainApi {
  constructor(config) {
    this.headers = config.headers;
    this.baseUrl = config.baseUrl;
  }

  _fetch(url, opt = {}) {
    return fetch(this.baseUrl + url, { headers: this.headers, ...opt }).then(
      (res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    );
  }

  getInitialMovies() {
    return this._fetch(`/movies`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      method: "GET",
    });
  }

  //
  getUserInfo() {
    //получить данные текущего пользователя
    return this._fetch(`/users/me`, {
      method: `GET`,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
    });
  }

  setUserInfo(name, email) {
    //обновить данные пользователя
    return this._fetch(`/users/me`, {
      method: `PATCH`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    });
  }

  delInitialMovie(id) {
    return this._fetch(`/movies/${id}`, {
      method: `DELETE`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        _id: id,
      }),
    });
  }

  addLikeMovieCard(
    //добавление понравившейся карточки
    {
      movieId,
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      nameRU,
      nameEN,
      thumbnail,
      owner
    }
  ) {
    return this._fetch(`/movies`, {
      method: `POST`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        movieId: movieId,
        country: country,
        director: director,
        duration: duration,
        year: year,
        description: description,
        image: image,
        trailerLink: trailerLink,
        nameRU: nameRU,
        nameEN: nameEN,
        thumbnail: thumbnail,
        owner: owner
      }),
    });
  }
}

export const mainApi = new MainApi({
  baseUrl: "https://api.brachunova.diplom.nomoredomains.icu",

  headers: {
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    "Content-Type": "application/json",
  },
});
