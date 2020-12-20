import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { UserPage } from "../pages/UserPage";

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/users/:username" component={UserPage} />
    </Switch>
  </Router>
);

export default routing;
