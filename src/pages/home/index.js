import React from "react";
import { Row, Col } from 'antd'
import {  router, dynamic } from "dva";
import styles from './home.module.css'

const { useRouteMatch, Switch, Route } = router

export default function ({ notifies, loading }) {

  const Home = dynamic({
    component: () => import('./Home')
  })
  const Footer = dynamic({
    component: () => import('components/Footer')
  })
  const NotFound = dynamic({
    component: () => import("pages/notFound"),
  });

  const { url } = useRouteMatch()

  return (
    <Row>
      <Col span={24}>
        <div className={styles['content-wrapper']}>
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
