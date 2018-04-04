import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore, applyMiddleware, compose } from "redux";
import { reducer } from "./reducer";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const composeEnhancers =
  process.env.NODE_ENV !== "production"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
const action = type => store.dispatch({ type });

sagaMiddleware.run(rootSaga);

function render() {
  ReactDOM.render(
    <App
      onIncrement={() => action("INCREMENT")}
      onIncrementAsync={() => action("INCREMENT_ASYNC")}
      onDecrement={() => action("DECREMENT")}
      value={store.getState()}
    />,
    document.getElementById("root")
  );
}

registerServiceWorker();
render();
store.subscribe(render);
