import React from "react";
import { dynamic, router } from "dva";

const { Router, Switch, Route } = router;

function RouterConfig({ history, app }) {
  const HomePage = dynamic({
    app,
    component: () => import("../pages/home"),
  });
  const LoginPage = dynamic({
    app,
    models: () => [import("../pages/login/model")],
    component: () => import("../pages/login"),
  });
  // const RegisterPage = dynamic({
  //   app,
  //   component: () => import('./../pages/')
  // });

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
