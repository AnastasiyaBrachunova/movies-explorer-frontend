import React from "react";
import { Route, Switch } from "react-router-dom";

// import { mainApi } from "../../utils/MainApi";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";
import ErrorModal from "../ErrorModal/ErrorModal";
import PageNotFound from "../PageNotFound/PageNotFound";
import Profile from "../Profile/Profile";
import BoxSigninSignup from "../BoxSigninSignup/BoxSigninSignup";
import BoxTypeMovies from "../BoxTypeMovies/BoxTypeMovies";
import NavProfile from "../NavProfile/NavProfile";
import Navigation from "../Navigation/Navigation";
import Register from "../Register/Register";
import Login from "../Login/Login";

function App() {
  return (
    <div className="body">
      <Switch>
        <Route exact path="/">
          <Header>
            <BoxSigninSignup />
          </Header>
          <Main />
          <Footer />
        </Route>

        <Route path="/saved-movies">
          <Header>
            <BoxTypeMovies />
            <NavProfile />
            <Navigation />
          </Header>
          <Movies />
          <Footer />
        </Route>

        <Route path="/movies">
          <Header>
            <BoxTypeMovies />
            <div className="swith-component">
              <NavProfile />
            </div>
            <Navigation />
          </Header>
          <Movies />
          <Footer />
        </Route>

        <Route path="/profile">
          <Header>
            <BoxTypeMovies />
            <NavProfile />
            <Navigation />
          </Header>
          <Profile />
        </Route>

        <Route path="/signin">
          <Login />
        </Route>

        <Route path="/signup">
          <Register />
        </Route>

        <Route path="*">
          <PageNotFound />
        </Route>

        <ErrorModal />
      </Switch>
    </div>
  );
}

export default App;
