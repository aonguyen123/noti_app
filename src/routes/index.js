import React from "react";
import { Router, Route, Switch } from "dva/router";
import HomePage from "./home";

import dynamic from "dva/dynamic";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={HomePage} />
    </Router>
  );
}
export default RouterConfig;
