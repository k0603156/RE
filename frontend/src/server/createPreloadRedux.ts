// JSON을 문자열로 변환하고 악성 스크립트가 실행되는 것을 방지하기 위해 <를 치환 처리   // https://redux.js.org/recipes/server-rendering#security-considerations

export default function createPreloadRedux(store: any) {
  const stateString = JSON.stringify(store.getState()).replace(/</g, "\\u003c");
  const preloadReduxState = `<script>__PRELOADED_REDUX_STATE__ = ${stateString}</script>`;
  return preloadReduxState;
}
