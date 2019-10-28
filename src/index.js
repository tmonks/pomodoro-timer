import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import * as serviceWorker from "./serviceWorker";
import timerReducer from "./timer/TimerReducer";
import presetReducer from "./preset/PresetReducer";
import appReducer from "./app/AppReducer";
import { logger } from "redux-logger";
import thunk from "redux-thunk";

import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";

const reducer = combineReducers({
  timer: timerReducer,
  presets: presetReducer,
  app: appReducer
});

const audioMiddleware = store => next => action => {
  const { app } = store.getState();
  switch (action.type) {
    case "NEXT_PRESET":
      let audioPromise = app.audioRef.play();
      if (audioPromise !== undefined) {
        audioPromise.catch(error => {
          console.log("audio playback failed: " + error);
        });
      }
      break;
    case "RESET":
    case "STOP":
      app.audioRef.pause();
      app.audioRef.currentTime = 0;
      break;
  }
  next(action);
};

const timerMiddleware = store => next => action => {
  const { timer } = store.getState();
  switch (action.type) {
    case "START":
      let intervalID = setInterval(() => {
        store.dispatch({ type: "TICK" });
      }, 1000);
      store.dispatch({ type: "SET_INTERVAL", payload: intervalID });
      next(action);
      break;
    case "RESET":
    case "STOP":
      clearInterval(timer.intervalID);
      next(action);
      break;
    case "TICK":
      if (timer.timeLeft <= 0) {
        const { app, presets } = store.getState();
        const nextPreset = (app.currentPreset + 1) % presets.length;
        store.dispatch({
          type: "NEXT_PRESET",
          newPreset: nextPreset,
          timeLeft: presets[nextPreset].value * 60,
          label: presets[nextPreset].label
        });
      } else {
        next(action);
      }
      break;
    default:
      next(action);
      break;
  }
};

const middleware = applyMiddleware(thunk, audioMiddleware, timerMiddleware, logger);
const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
