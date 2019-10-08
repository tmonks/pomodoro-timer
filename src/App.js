import React from "react";
import "./App.css";

import { createStore, combineReducers } from "redux";

const workTimeReducer = (state = 25, action) => {
  switch (action.type) {
    case "INC_WORKTIME":
      return state < 60 ? state + 1 : state;
    case "DEC_WORKTIME":
      return state > 1 ? state - 1 : state;
    default:
      return state;
  }
};

const breakTimeReducer = (state = 5, action) => {
  switch (action.type) {
    case "INC_BREAKTIME":
      return state < 60 ? state + 1 : state;
    case "DEC_BREAKTIME":
      return state > 1 ? state - 1 : state;
    default:
      return state;
  }
};

const isRunningReducer = (state = false, action) => {
  if (action.type === "PLAY") {
    return true;
  } else if (action.type === "PAUSE") {
    return false;
  } else {
    return state;
  }
};

const currentTimeReducer = (state = 25, action) => {
  if (action.type === "PLAY") {
    return action.time * 60;
  } else if (action.type === "TICK") {
    return state - 1;
  } else {
    return state;
  }
};

const reducers = combineReducers({
  workTime: workTimeReducer,
  breakTime: breakTimeReducer,
  isRunning: isRunningReducer,
  currentTime: currentTimeReducer
});

const store = createStore(reducers);

store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch({ type: "INC_WORKTIME" });
store.dispatch({ type: "INC_WORKTIME" });
store.dispatch({ type: "INC_WORKTIME" });
store.dispatch({ type: "INC_WORKTIME" });
store.dispatch({ type: "PAUSE" });
store.dispatch({ type: "PLAY", time: store.getState().workTime });
store.dispatch({ type: "TICK" });
store.dispatch({ type: "TICK" });
store.dispatch({ type: "TICK" });

function App() {
  let currentTime = store.getState().currentTime;
  let minutesLeft = Math.floor(currentTime / 60);
  let secondsLeft = currentTime % 60;

  return (
    <div className="App">
      <h1>{minutesLeft + ":" + secondsLeft}</h1>
    </div>
  );
}

export default App;
