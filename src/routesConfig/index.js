import React from "react";
import { LoadingOutlined } from '@ant-design/icons'
import { Router, Route, Switch, Redirect } from "dva/router";

import dynamic from "dva/dynamic";

function RouterConfig({ history, app }) {
  const HomePage = dynamic({
    app,
    component: () => import("../pages/home"),
  });
  // const LoginPage = dynamic({
  //   app,
  //   models: () => [import("./../models/auth")],
  //   component: () => import("../pages/login"),
  // });
  const GuestLayout = dynamic({
    app,
    component: () => import("layouts/guestLayout"),
  });

  dynamic.setDefaultLoadingComponent(() => {
    return <LoadingOutlined  />;
  });
  
  return (
    <Router history={history}>
      <Switch>
        <Redirect exact from='/' to='/home' />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/login" component={GuestLayout} />


      </Switch>
    </Router>
  );
}
export default RouterConfig;
