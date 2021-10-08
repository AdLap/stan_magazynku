import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Header from "./header/Header";
import Home from './home/Home';
import CategoryHome from "./content/CategoryHome";
import LogIn from "./auth/login/Login";
import Register from "./auth/register/Register";
import Item from "./content/Item";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={LogIn} />
          <Route path='/rejestracja' component={Register} />
          <Route path='/kategorie' component={CategoryHome} />
          <Route path='/rzecz' component={Item} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
