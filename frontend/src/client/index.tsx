import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import configStore from "@Store/index";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import App from "./App";

const customHistory = createBrowserHistory();

ReactDOM.render(
  <Router history={customHistory}>
    <Provider store={configStore(customHistory)}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
