import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "client/containers/App";
import createPage from "./createPage";

import { END } from "redux-saga";
import createPreloadRedux from "./createPreloadRedux";
import PreloadContext from "client/services/Store/lib/preloadContext";
import { store, sagaPromise } from "client/services/Store/configStore";

const serverRender = async (req: any, res: any, next: any) => {
  const context = {};

  const preloadContext = { done: false, promises: [] };
  const html = (
    <PreloadContext.Provider value={preloadContext}>
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    </PreloadContext.Provider>
  );

  ReactDOMServer.renderToStaticMarkup(html);
  store.dispatch(END);
  try {
    await sagaPromise;
    await Promise.all(preloadContext.promises);
  } catch (e) {
    return res.status(500);
  }
  preloadContext.done = true;

  const root = ReactDOMServer.renderToString(html);
  const preReduxState = createPreloadRedux(store);

  res.send(createPage(root, preReduxState));
};
export default serverRender;
