import React from "react";
import { router } from "dva";

const { Route } = router;

function RouterConfig({ component: Component, ...rest }) {
  return (
    <Route {...rest} render={(routeProps) => <Component {...routeProps} />} />
  );
}

export default RouterConfig;
