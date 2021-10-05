import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Header from "./header/Header";
import Home from './home/Home';
import Category from "./itemContent/Category";
//import LogIn from "./login/Login";

const App = () => {
  return (
    <>
      <Header />
      {/* <LogIn /> */}
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/kategorie' component={Category} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
