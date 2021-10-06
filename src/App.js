import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Header from "./header/Header";
import Home from './home/Home';
import Category from "./itemContent/Category";
import LogIn from "./auth/login/Login";
import Register from "./auth/register/Register";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={LogIn} />
          <Route path='/rejestracja' component={Register} />
          <Route path='/kategorie' component={Category} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
