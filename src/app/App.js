import React from "react";
import "./App.css";
import Timer from "../timer/Timer";
import Preset from "../preset/Preset";

/*
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

*/

function App() {
  return (
    <div className="App">
      <Preset value="25" />
      <Preset value="5" />
      <Timer title="Work" timeLeft={25 * 60} running={false} />
    </div>
  );
}

export default App;
