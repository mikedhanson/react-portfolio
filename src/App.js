import React from "react";

import "./App.css";
import Main from "./containers/Main";
import { BrowserRouter, Route  } from 'react-router-dom';
import About from './containers/About/About.js';
import Beta from './containers/Beta/Beta.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={ Main } />
        <Route path="/about" exact component={ About } />
        <Route path="/Beta" exact component={ Beta } />
      </BrowserRouter>
    </div>
  );
}

export default App;
