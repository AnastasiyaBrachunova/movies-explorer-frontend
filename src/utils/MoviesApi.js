class MoviesApi {
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

  getSearchlMovies() {
    //получить карточки фильмов
    return this._fetch(`/beatfilm-movies`, {
      headers: {
       "Content-Type": "application/json",
      },
      method: "GET",
    });
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co",
  headers: {
    "Content-Type": "application/json",
  },
});
