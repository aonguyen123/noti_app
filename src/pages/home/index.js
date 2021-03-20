import React from "react";
import { Row, Col } from "antd";
import { router, dynamic, connect } from "dva";

import { Footer } from "components";
import { firebaseInit } from "firebaseInit";
import styles from "./home.module.css";

const { useRouteMatch, Switch, Route } = router;

function Main({ dispatch, app }) {
  console.log(app);
  const Home = dynamic({
    component: () => import("./Home"),
  });
  const NotFound = dynamic({
    component: () => import("pages/notFound"),
  });

  const { url } = useRouteMatch();

  React.useEffect(() => {
    const unregisterAuthObserver = firebaseInit
      .auth()
      .onAuthStateChanged(async (user) => {
        if (!user) {
          window.location.href = "/login";
        }
      });
    return () => unregisterAuthObserver();
  }, [dispatch]);

  return (
    <Row>
      <Col span={24}>
        <div className={styles["content-wrapper"]}>
          <Switch>
            <Route exact path={url} component={Home} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Col>
    </Row>
  );
}

export default connect(({ app, loading }) => ({
  loading,
  app: app,
}))(Main);
