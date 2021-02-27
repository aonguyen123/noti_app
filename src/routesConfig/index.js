import React, {useEffect} from "react";
import {router, dynamic} from "dva";

import { firebaseInit } from 'firebaseInit'
import { Loader } from 'components'
import "firebase/auth";

const {BrowserRouter, Route, Switch, Redirect} = router;

function RouterConfig({history, app}) {

  useEffect(() => {
    const unregisterAuthObserver = firebaseInit
      .auth()
      .onAuthStateChanged(async user => {
        if(!user) {
          console.log('user logout')
          return ;
        }
        console.log('login user info', user)
        const _token = await user.getIdToken()
        console.log(_token)
      });

      return () => unregisterAuthObserver();
  }, []);

  const HomePage = dynamic({
    app,
    component: () => import("pages/home"),
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
