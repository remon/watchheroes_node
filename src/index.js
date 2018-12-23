import React from "react";
import ReactDOM from "react-dom";

import Home from "./components/Home";
import HeroItem from "./components/HeroItem";
import { BrowserRouter, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Home</Link>
        </header>
        <Route path="/:id" component={HeroItem} />
        <Route path="/" exact component={Home} />
      </div>
    </BrowserRouter>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
