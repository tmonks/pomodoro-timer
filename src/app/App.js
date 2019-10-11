import React from "react";
import "./App.css";
import Timer from "../timer/Timer";
import Preset from "../preset/Preset";
import { connect } from "react-redux";

let timerID = null;

function App(props) {
  const toggleTimer = () => {
    if (!props.running) {
      timerID = setInterval(() => {
        props.tick();
      }, "1000");
      props.start();
    } else {
      clearInterval(timerID);
      props.stop();
    }
  };

  const resetTimer = () => {
    if (props.running) {
      clearInterval(timerID);
    }
    props.reset();
  };

  if (props.running && props.timeLeft === 0) {
    clearInterval(timerID);
    props.stop();
  }

  return (
    <div className="app">
      <Preset index={0} id="session" />
      <Preset index={1} id="break" />
      <Timer
        label={props.label}
        timeLeft={props.timeLeft}
        running={props.running}
        toggle={toggleTimer}
        reset={resetTimer}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    label: state.timer.label,
    timeLeft: state.timer.timeLeft,
    running: state.timer.running,
    presets: state.presets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    tick: () => dispatch({ type: "TICK" }),
    start: () => dispatch({ type: "PLAY" }),
    stop: () => dispatch({ type: "PAUSE" }),
    reset: () => dispatch({ type: "RESET" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
