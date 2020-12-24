import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./containers/Main";
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import AnythingIT from './containers/blogs/anythingIT';
import About from './containers/About';
//import About from './About';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Main} />
        <Route path="/home" exact component={Main} />
        <Route path="/about" exact component={About} />
        <Route path="/anythingit" exact component={AnythingIT} />
      </BrowserRouter>
    </div>
  );
}

export default App;
