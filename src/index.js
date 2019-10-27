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
      app.audioRef.pause();
      app.audioRef.currentTime = 0;
      break;
  }
  next(action);
};

const middleware = applyMiddleware(thunk, audioMiddleware);
const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
