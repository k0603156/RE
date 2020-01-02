import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./modules";
import createSagaMiddleware from "redux-saga";
// import ReduxThunk from "redux-thunk";

const LOGGER = createLogger();
const sagaMiddleware = createSagaMiddleware();
export default function configStore(): StoreType {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(LOGGER, sagaMiddleware))
  );
  return store;
}
