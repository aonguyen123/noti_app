import React from "react";
import {Router, Route, Switch} from "dva/router";
// import HomePage from "./home";

import dynamic from "dva/dynamic";

function RouterConfig({history, app}) {
  const HomePage = dynamic({
    app,
    component: () => import("./home"),
  });

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}
export default RouterConfig;
