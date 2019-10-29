import React from "react";
import ReactDOM from "react-dom";

import App from "./app/App";
import * as serviceWorker from "./serviceWorker";

import timerReducer from "./timer/TimerReducer";
import presetReducer from "./preset/PresetReducer";
import appReducer from "./app/AppReducer";

import { logger } from "redux-logger";
import { audioMiddleware, timerMiddleware } from "./middleware";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";

const reducer = combineReducers({
  timer: timerReducer,
  presets: presetReducer,
  app: appReducer
});

const middleware = applyMiddleware(thunk, audioMiddleware, timerMiddleware, logger);
const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
