import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducer";

import createSagaMiddleware from "redux-saga";
import { helloSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
const action = type => store.dispatch({ type });

sagaMiddleware.run(helloSaga);

function render() {
  ReactDOM.render(
    <App
      onIncrement={() => action("INCREMENT")}
      onDecrement={() => action("DECREMENT")}
      value={store.getState()}
    />,
    document.getElementById("root")
  );
}

registerServiceWorker();
render();
store.subscribe(render);
