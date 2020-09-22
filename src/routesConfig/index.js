import React from "react";
import { Router, Route, Switch } from "dva/router";

import dynamic from "dva/dynamic";

function RouterConfig({ history, app }) {
  const HomePage = dynamic({
    app,
    component: () => import("../pages/home"),
  });
  const LoginPage = dynamic({
    app,
    models: () => [import("./../models/auth")],
    component: () => import("../pages/login"),
  });

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}
export default RouterConfig;
