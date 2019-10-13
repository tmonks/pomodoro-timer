import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import * as serviceWorker from "./serviceWorker";
import timerReducer from "./timer/TimerReducer";
import presetReducer from "./preset/PresetReducer";
import { logger } from "redux-logger";
import thunk from "redux-thunk";

import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";

const reducer = combineReducers({
  timer: timerReducer,
  presets: presetReducer
});

const middleware = applyMiddleware(logger, thunk);
const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
