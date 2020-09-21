import React from "react";
import dva from "dva";
import { message } from "antd";
import { Router, Route } from "dva/router";
import createLoading from "dva-loading";
import { createBrowserHistory } from "history";
import "antd/dist/antd.css";

import Home from "./pages/home/index";
import appModel from "./models/app";
import { requestFirebaseNotification, onMessageListener } from "./firebaseInit";
import RouterConfig from "./routes";

requestFirebaseNotification()
  .then((firebaseToken) => {
    // console.log(firebaseToken);
    // send token to server
    // setToken(firebaseToken);
  })
  .catch((err) => {
    return err;
  });

onMessageListener()
  .then((payload) => {
    const { title, body } = payload.data;
    console.log(title, body);
  })
  .catch((err) => {});

const app = dva({
  history: createBrowserHistory(),
  onError(e) {
    message.error(e.message, 3);
  },
});

app.model(appModel);
app.use(createLoading());

app.router(({ history, app }) => RouterConfig({ history }));

export default app;
