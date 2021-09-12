import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../components/Home";
import Trending from "../components/Trending";

import Search from "../components/Search";

function Routes() {
  return (
    <Router>
      <div className="container-ya-app">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/trending" component={Trending} />
          <Route path="/search" component={Search} />
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
