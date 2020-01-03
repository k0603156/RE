import rootReducer, { rootSaga } from "./modules";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

export default function configStore(): StoreType {
  const LOGGER = createLogger();
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(LOGGER, sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
