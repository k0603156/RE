import { combineReducers } from "redux";
import auth, { authSaga } from "./Auth/reducers";
import loading from "./Loading";

import { all } from "redux-saga/effects";

const rootReducer = combineReducers<RootStateType>({
  auth,
  loading
});
export default rootReducer;
export function* rootSaga() {
  yield all([authSaga()]);
}
