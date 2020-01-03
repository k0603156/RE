import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import configStore from "Store";
import { Provider } from "react-redux";
import * as serviceWorker from "./Worker/serviceWorker";

ReactDOM.render(
  <Provider store={configStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
