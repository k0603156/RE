import rootReducer, { rootSaga } from "./modules";
import { createStore, applyMiddleware, compose, Middleware } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

export default function configStore() {
  const LOGGER = createLogger();
  const sagaMiddleware = createSagaMiddleware();
  const MiddleWares: Middleware[] = [sagaMiddleware];
  process.env.NODE_ENV !== "production" && MiddleWares.push(LOGGER);
  const store =
    process.env.NODE_ENV === "production"
      ? createStore(rootReducer, compose(applyMiddleware(...MiddleWares)))
      : createStore(
          rootReducer,
          composeWithDevTools(applyMiddleware(...MiddleWares))
        );
  sagaMiddleware.run(rootSaga);
  return store;
}
