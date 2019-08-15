import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as serviceWorker from './worker/serviceWorker';
import 'react-app-polyfill/ie11';

import Layout from './layouts';
import userReducer from './user/reducer';

const store = createStore(
    userReducer,
);

ReactDOM.render(
    <Provider store={store} >
      <Layout/>
    </Provider>,
    document.getElementById('root')
)
serviceWorker.unregister();
