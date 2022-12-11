import React from "react";

import "./App.css";
import Main from "./containers/Main";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./containers/About/About.js";
import Posts from "./containers/Posts/Posts.js";
import Beta from "./containers/Beta/Beta.js";
import ChangeLog from "./containers/Github/ChangeLog.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Main} />
        <Route path="/about" exact component={About} />
        <Route path="/posts" exact component={Posts} />
        <Route path="/beta" exact component={Beta} />
        <Route path="/changelog" exact component={ChangeLog} />
      </BrowserRouter>
    </div>
  );
}

export default App;
