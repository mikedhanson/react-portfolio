import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./containers/Main";
import { BrowserRouter, Route  } from 'react-router-dom';
import About from './containers/About';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={ Main } />
        <Route path="/home" exact component={ Main } />
        <Route path="/about" exact component={ About } />
      </BrowserRouter>
    </div>
  );
}

export default App;
