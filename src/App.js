import React from "react";

import "./App.css";
import Main from "./containers/Main";
import { BrowserRouter, Route  } from 'react-router-dom';
import About from './containers/About/About.js';
import Posts from './containers/Posts/Posts.js';
import Beta from './containers/Beta/Beta.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={ Main } />
        <Route path="/about" exact component={ About } />
        <Route path="/posts" exact component={ Posts } />
        <Route path="/Beta" exact component={ Beta } />
      </BrowserRouter>
    </div>
  );
}

export default App;
