import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { register } from "../../utils/UserAuth";
import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";

import PageNotFound from "../PageNotFound/PageNotFound";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { autorize } from "../../utils/UserAuth";
import { moviesApi } from "../../utils/MoviesApi";
import Modal from "../Modal/Modal";
import { mainApi } from "../../utils/MainApi";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false); // стейт проверки логирования(в защищенные роуты и логин)
  const [beatsMovies, setBeatsMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isModal, setModal] = useState(false); //открытие модалки ответа решистрации
  const [errorModal, setErrorModal] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const history = useHistory();

  const getUserInfo = () => {
    mainApi
      .getUserInfo()
      .then((res) => {
        setCurrentUser({
          email: res.email,
          name: res.name,
          _id: res._id,
        });
      })
      .catch((err) => {
        setModal(true);
        setErrorModal(err);
        console.log("Ошибка получения дынных пользователя");
      });
  };

  const handleRegister = (name, email, password) => {
    register(name, email, password)
      .then((res) => {
        if (res) {
          getUserInfo();
          setLoggedIn(true);
          history.push("/movies");
          setModal(true);
        }
      })
      .catch((err) => {
        setModal(true);
        setErrorModal(err);
        console.log("Ошибка регистрации пользователя");
      });
  };

  const handleLogin = (email, password) => {
    autorize(email, password)
      .then((res) => {
        if (res) {
          getUserInfo();
          setLoggedIn(true);
          history.push("/movies");
          setModal(true);
          
        }
      })
      .catch((err) => {
        console.log(err);
        setModal(true);
        setErrorModal(err);
        console.log("Ошибка авторизации");
      });
  };

  // const handleGetUserData = () => {};

  // редактирование данных профиля
  const handleUpdateUser = (dataUser) => {
    mainApi
      .setUserInfo(dataUser.name, dataUser.email)
      .then((res) => {
        setCurrentUser(res);
        setModal(true);
      })
      .catch((err) => {
        console.log("Ошибка обновления данных пользователя");
        setModal(true);
        setErrorModal(err);
      });
  };

  //********** Загрузка фильмов **************

  const getSavedMovies = () => {
    mainApi
      .getInitialMovies()
      .then((res) => {
        setIsloading(false);
        setSavedMovies(res);
      })
      .catch((err) => {
        setIsloading(false);
        setModal(true);
        setErrorModal(err);
        console.log("Ошибка получения массива карточек");
      });
  };

  useEffect(() => {
    if (loggedIn) {
      getSavedMovies();
    }
  }, [loggedIn]);

  const getBeatsMovies = () => {
    const localStorageMovies = JSON.parse(localStorage.getItem("beatsMovies"));

    if (localStorageMovies && localStorageMovies.length > 0) {
      setBeatsMovies(localStorageMovies);
    } else {
      setIsloading(true);
      moviesApi
        .getBeatsMovies()
        .then((res) => {
          setIsloading(false);
          setBeatsMovies(res);

          localStorage.setItem("beatsMovies", JSON.stringify(res));
        })
        .catch((err) => {
          setIsloading(false);
          setModal(true);
          setErrorModal(err);
          console.log("Ошибка получения массива карточек");
        });
    }
  };

  const logout = () => {
    history.push("/signin");
    localStorage.clear();
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <Switch>
          <Route exact path="/">
            <Main loggedIn={loggedIn}/>
          </Route>

          <ProtectedRoute
            exact
            path="/profile"
            component={Profile}
            email={currentUser.email}
            name={currentUser.name}
            onModal={() => setModal(true)}
            loggedIn={loggedIn}
            onUpdateUser={handleUpdateUser}
          />

          <ProtectedRoute
            exact
            path="/movies"
            component={Movies}
            loggedIn={loggedIn}
            movies={beatsMovies}
            savedMovies={savedMovies}
            setSavedMovies={(arr) => setSavedMovies(arr)}
            setModal={() => setModal(true)}
            setError={() => setErrorModal(true)}
            getBeatsMovies={() => getBeatsMovies()}
          />

          <ProtectedRoute
            exact
            path="/saved-movies"
            component={Movies}
            loggedIn={loggedIn}
            movies={savedMovies}
            setSavedMovies={(arr) => setSavedMovies(arr)}
            savedMovies={savedMovies}
            isLoading={isLoading}
            setModal={() => setModal(true)}
            setError={() => setErrorModal(true)}
          />

          <Route path="/signin">
            <Register
              onModal={() => setModal(true)}
              handleSubmit={handleLogin}
            />
          </Route>

          <Route path="/signup">
            <Register
              onModal={() => setModal(true)}
              handleSubmit={handleRegister}
            />
          </Route>

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>

        {!errorModal && (
          <Modal
            isOpen={isModal}
            onClose={() => {
              setModal(false);
            }}
          />
        )}

        {errorModal && (
          <Modal
            isOpen={isModal}
            onClose={() => {
              setModal(false);
              setErrorModal("");
              if (errorModal.includes("401")) {
                logout();
              }
            }}
            onError={errorModal}
          />
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
