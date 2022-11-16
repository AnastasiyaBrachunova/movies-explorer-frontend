import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";

import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import PageNotFound from "../PageNotFound/PageNotFound";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { checkToken } from "../../utils/UserAuth";
import { moviesApi } from "../../utils/MoviesApi";





function App() {
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    password: "",
  }); // стейт для отслеживания текущего пользователя(лайки/токены/редакт инфо)

  // const [serchMovie, setSearchMovie] = useState([]); //стейт поиска фильма

  // const foundMovie = (serchMovie) => {
  //   //функция поиска фильма
  //   setSearchMovie(serchMovie);
  // };

  const [loggedIn, setLoggedIn] = useState(false); // стейт проверки логирования(в защищенные роуты и логин)
  const [movieCards, setMovieCards] = useState([]); // стейт получения карточек с фильмами. Cards передать пропсом в компонент с отрисовкой

  const history = useHistory();

  useEffect(() => {

    const token = localStorage.getItem("jwt");
      token && checkToken(token).then((res) => {
          if (res) {
            setCurrentUser(res);
            setLoggedIn(true);
            history.push("/profile");
          } else {
            history.push("/singin");
          }
        }).catch((err) => console.log("Ошибка получения токена"));
  
    }, []);
  
    useEffect(() => {
      const token = localStorage.getItem("jwt");
      if (loggedIn) {
         moviesApi
          .getInitialCards(token)
          .then((cardsData) => {
            setMovieCards(cardsData);
          })
          .catch((err) => console.log("Ошибка получения массива карточек"));
      }
    }, [loggedIn]);



  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <Switch>
          <Route exact path="/">
            <Main 
            
            />
          </Route>

          <ProtectedRoute
            exact
            path="/profile"
            component={Profile}
            loggedIn={loggedIn}
          />

          <ProtectedRoute
            exact
            path="/movies"
            component={Movies}
            loggedIn={loggedIn}
            cards={movieCards}
          />

          <ProtectedRoute
            exact
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
          />

          <Route path="/signin">
            <Login />
          </Route>

          <Route path="/signup">
            <Register />
          </Route>

          <Route path="*">
            <PageNotFound />
          </Route>

        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
