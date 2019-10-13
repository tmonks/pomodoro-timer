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

  /*
  if (props.running && props.timeLeft === 0) {
    props.nextPreset();
  }
  */

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

/* redux-thunk action creator to switch to next preset */
const nextPreset = () => {
  return (dispatch, getState) => {
    const { timer, presets } = getState();
    let nextPreset = (timer.currentPreset + 1) % presets.length;
    let lastPreset = presets.length - 1;
    console.log(
      "setting preset to: " + nextPreset + " - " + presets[nextPreset].label
    );

    dispatch({
      type: "NEXT_PRESET",
      index: nextPreset,
      timeLeft: presets[nextPreset].value * 60,
      label: presets[nextPreset].label
    });
  };
};

const tick = () => {
  return (dispatch, getState) => {
    const { timer } = getState();
    if (timer.timeLeft <= 0) {
      dispatch(nextPreset());
    } else {
      dispatch({ type: "TICK" });
    }
  };
};

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
    tick: () => dispatch(tick()),
    start: () => dispatch({ type: "PLAY" }),
    stop: () => dispatch({ type: "PAUSE" }),
    reset: () => dispatch({ type: "RESET" }),
    nextPreset: () => dispatch(nextPreset())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
