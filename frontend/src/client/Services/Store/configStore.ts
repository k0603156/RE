import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer, { rootSaga } from "client/services/Store/modules";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

const sagaPromise = sagaMiddleware.run(rootSaga).toPromise();

export { store, sagaPromise };
