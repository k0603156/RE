import { combineReducers } from "redux";
import { authReducer } from "./Auth/reducers";
import { all } from "redux-saga/effects";

export function* rootSaga() {
  yield all([]);
}

const rootReducer = combineReducers<RootStateType>({
  authReducer
});
export default rootReducer;
