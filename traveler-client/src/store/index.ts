import rootReducer, { rootSaga } from "./modules";
import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

export default function configStore() {
  const LOGGER = createLogger();
  const sagaMiddleware = createSagaMiddleware();
  const middleWares = [LOGGER, sagaMiddleware];
  const store =
    process.env.NODE_ENV === "production"
      ? createStore(rootReducer, compose(applyMiddleware(...middleWares)))
      : createStore(
          rootReducer,
          composeWithDevTools(applyMiddleware(...middleWares))
        );
  sagaMiddleware.run(rootSaga);
  return store;
}
