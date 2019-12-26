import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import configStore from "store";
import { Provider } from "react-redux";
import * as serviceWorker from "./worker/serviceWorker";

ReactDOM.render(
  <Provider store={configStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
