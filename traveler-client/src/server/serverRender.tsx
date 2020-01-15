import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "@Client/App";
import createPage from "./createPage";

import PreloadContext from "@Store/lib/preloadContext";
import { store, sagaPromise } from "@Store/configStore";
import { END } from "redux-saga";
import createPreloadRedux from "./createPreloadRedux";

const serverRender = async (req: any, res: any, next: any) => {
  const context = {};

  const preloadContext = { done: false, promises: [] };
  const jsx = (
    <PreloadContext.Provider value={preloadContext}>
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    </PreloadContext.Provider>
  );

  ReactDOMServer.renderToStaticMarkup(jsx);
  store.dispatch(END);
  try {
    await sagaPromise;
    await Promise.all(preloadContext.promises);
  } catch (e) {
    return res.status(500);
  }
  preloadContext.done = true;

  const root = ReactDOMServer.renderToString(jsx);
  const preReduxState = createPreloadRedux(store);

  res.send(createPage(root, preReduxState));
};
export default serverRender;
