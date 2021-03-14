import React from "react";
import {router, dynamic} from "dva";

import { Loader } from 'components'
import "firebase/auth";

const {BrowserRouter, Route, Switch, Redirect} = router;

function RouterConfig({history, app}) {

  const HomePage = dynamic({
    app,
    component: () => import("pages/home"),
    models: () => [import('models/home')]
  });
  const NotFound = dynamic({
    app,
    component: () => import("pages/notFound"),
  });
  const AuthPage = dynamic({
    app,
    component: () => import("pages/login"),
    // models: () => [import("models/auth")],
  });

  dynamic.setDefaultLoadingComponent(() => {
    return <Loader />;
  });

  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={HomePage} />
        <Route path="/login" component={AuthPage} />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
export default RouterConfig;
