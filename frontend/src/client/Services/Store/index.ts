import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import {
  createStore,
  applyMiddleware,
  compose,
  Middleware,
  combineReducers,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";

import main from "client/containers/Pages/public/Main/reducers";
import mainSaga from "client/containers/Pages/public/Main/saga";
import board from "client/containers/Pages/public/Board/reducers";
import boardSaga from "client/containers/Pages/public/Board/saga";
import post from "client/containers/Pages/public/Post/reducers";
import postSaga from "client/containers/Pages/public/Post/saga";
import auth from "client/containers/Pages/session/Auth/reducers";
import authSaga from "client/containers/Pages/session/Auth/saga";
import profile from "client/containers/Pages/private/Profile/reducers";
import profileSaga from "client/containers/Pages/private/Profile/saga";

import loading from "client/containers/Providers/Loading";
import msg from "client/containers/Message/reducers";
import msgSaga from "client/containers/Message/saga";

const rootReducer = combineReducers({
  main,
  auth,
  profile,
  post,
  board,
  loading,
  msg,
});

export function* rootSaga() {
  yield all([
    fork(mainSaga),
    fork(authSaga),
    fork(profileSaga),
    fork(postSaga),
    fork(boardSaga),
    fork(msgSaga),
  ]);
}
export type RootStateType = ReturnType<typeof rootReducer>;

export default function configStore(history: any) {
  /* eslint-disable no-underscore-dangle */
  const PRELOADED_STATE = (window as any).__PRELOADED_REDUX_STATE__;
  const LOGGER = createLogger();
  const sagaMiddleware = createSagaMiddleware({
    context: {
      history,
    },
  });
  const MiddleWares: Middleware[] = [sagaMiddleware];
  process.env.NODE_ENV !== "production" && MiddleWares.push(LOGGER);
  const store =
    process.env.NODE_ENV === "production"
      ? createStore(rootReducer, compose(applyMiddleware(...MiddleWares)))
      : createStore(
          rootReducer,
          PRELOADED_STATE,
          composeWithDevTools(applyMiddleware(...MiddleWares)),
        );
  sagaMiddleware.run(rootSaga);
  return store;
}
