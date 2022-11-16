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

  addLikeMovieCard(
    //добавление понравившейся карточки
    movieId,
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail
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
        trailer: trailer,
        nameRU: nameRU,
        nameEN: nameEN,
        thumbnail: thumbnail
      }),
    });
  }

  getAppInfo() {
    return Promise.all([this.getInitialCards(), this.getUserInfo()]);
  }

  getInitialMovies() {
    //получить карточки фильмов
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
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
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

  // setUserAvatar(avatar) {
  //   return this._fetch(`/users/me/avatar`, {
  //     method: `PATCH`,
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  //     },
  //     body: JSON.stringify({
  //       avatar: avatar,
  //     }),
  //   });
  // }

  delInitialMovie(del) {
    //убрать лайк с карточки и удалить 
    return this._fetch(`/movies/${del}`, {
      method: `DELETE`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        _id: del,
      }),
    });
  }

//   changeLikeMovie(id, isLiked) {
//     return this._fetch(`/cards/${id}/likes`, {
//       method: `${isLiked ? "DELETE" : "PUT"}`,
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem("jwt")}`,
//       },
//       body: JSON.stringify({
//         _id: id,
//       }),
//     });
//   }
}

export const mainApi = new MainApi({
  baseUrl: "https://api.brachunova.diplom.nomoredomains.icu",
  
  headers: {
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    "Content-Type": "application/json",
  },
});
