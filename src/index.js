import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import * as serviceWorker from "./serviceWorker";
import timerReducer from "./timer/TimerReducer";
import presetReducer from "./preset/PresetReducer";
import { logger } from "redux-logger";

import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";

const reducer = combineReducers({
  timer: timerReducer,
  presets: presetReducer
});
// const reducers = combineReducers({
//   workTime: workTimeReducer,
//   breakTime: breakTimeReducer,
//   isRunning: isRunningReducer,
//   currentTime: currentTimeReducer
// });

const middleware = applyMiddleware(logger);
const store = createStore(reducer, middleware);

// store.subscribe(() => {
// console.log("store changed", store.getState());
// });

// store.dispatch({ type: "PAUSE" });
// store.dispatch({ type: "PLAY" });
// store.dispatch({ type: "TICK" });
// store.dispatch({ type: "TICK" });
// store.dispatch({ type: "TICK" });
// store.dispatch({ type: "INCREMENT", id: 0 });
// store.dispatch({ type: "DECREMENT", id: 1 });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
