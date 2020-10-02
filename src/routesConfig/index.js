import React from "react";
import { dynamic, router } from "dva";

import RouterConfig from "./routerConfig";
import Layout from "layouts";

const { Router, Switch, Route, useRouteMatch, Redirect } = router;

function Nesting() {
  let { path } = useRouteMatch();
  console.log(path);
  return (
    <Switch>
      <Route exact path={path}>
        <h1>Test</h1>
      </Route>
      <Route exact path={`${path}/test`}>
        <h1>Test1</h1>
      </Route>
      <Route exact path={`${path}/not-found`}>
        <h1>not found</h1>
      </Route>
      <Route path="/not-found">
        <h1>Not Found1</h1>
      </Route>
      <Redirect to="/not-found" />
    </Switch>
  );
}

function Config({ history, app }) {
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
        <Redirect exact from="/" to="/home" />
        <Route path="/home">
          <Nesting />
        </Route>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/not-found">
          <h1>Not Found</h1>
        </Route>
      </Switch>
    </Router>
  );
}
export default Config;
