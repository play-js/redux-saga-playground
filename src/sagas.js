import { delay } from "redux-saga";
import { put, takeEvery, all, call } from "redux-saga/effects";
const Api = {
  fetchUser: () => "success fetch user"
};

export function* helloSaga() {
  yield console.log("Hello Saga !");
}

export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: "INCREMENT" });
}

export function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export function* fetchData(action) {
  try {
    // const data = yield call(Api.fetchUser, action.payload.url);
    const data = yield call(Api.fetchUser, "url.com");
    yield put({ type: "FETCH_SUCCEDED" });
  } catch (error) {
    yield put({ type: "FETCH_FAILED" }, error);
  }
}

export function* watchFetchData() {
  // yield takeLastet("FETCH_REQUESTED", fetchData);
  yield takeEvery("FETCH_REQUESTED", fetchData);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync(), watchFetchData()]);
}
