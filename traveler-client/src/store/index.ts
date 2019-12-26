import { createStore, Store } from "redux";
import rootReducer, { rootState } from "./modules";
export default function configStore(): Store<rootState> {
  const store = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}
