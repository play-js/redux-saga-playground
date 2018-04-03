import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducer";

const store = createStore(reducer, applyMiddleware());
const action = type => store.dispatch({ type });

console.log(store.getState());

ReactDOM.render(
  <App
    onIncrement={() => action("INCREMENT")}
    onDecrement={() => action("DECREMENT")}
    value={store.getState()}
  />,
  document.getElementById("root")
);
registerServiceWorker();
