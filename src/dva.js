import React from 'react';
import dva from 'dva'
import { message } from 'antd'
import { Router, Route } from 'dva/router'
import createLoading from 'dva-loading';

import App from './App';
import test from './models/test'

const app = dva({
    onError(e) {
        message.error(e.message, 3);
    }
})

app.model(test);

app.use(createLoading());
app.router(({history}) => {
    return (
        <Router history={history}>
            <Route path='/' component={App} />
        </Router>
    )
})
export default app;