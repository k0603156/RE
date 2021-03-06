import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import configureStore from "client/configureStore";
import * as serviceWorker from "./serviceWorker";
import App from "client/containers/App";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Provider store={configureStore(history)}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root"),
);

serviceWorker.unregister();
