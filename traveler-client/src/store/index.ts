import rootReducer, { rootSaga } from "./modules";
import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

export default function configStore() {
  const LOGGER = createLogger();
  const sagaMiddleware = createSagaMiddleware();
  const prodMiddleWares = [sagaMiddleware];
  const devMiddleWares = [LOGGER, sagaMiddleware];

  const store =
    process.env.NODE_ENV === "production"
      ? createStore(rootReducer, compose(applyMiddleware(...prodMiddleWares)))
      : createStore(
          rootReducer,
          composeWithDevTools(applyMiddleware(...devMiddleWares))
        );
  sagaMiddleware.run(rootSaga);
  return store;
}
