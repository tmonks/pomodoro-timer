import React from "react";
import "./App.css";
import Timer from "../timer/Timer";
import Preset from "../preset/Preset";
import { connect } from "react-redux";

function App(props) {
  return (
    <div className="app">
      <Preset id={0} />
      <Preset id={1} />
      <Timer
        label={props.label}
        timeLeft={props.timeLeft}
        running={props.running}
        play={props.play}
        pause={props.pause}
        reset={() => props.reset(props.startTime)}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    label: state.timer.label,
    timeLeft: state.timer.timeLeft,
    running: state.timer.running,
    startTime: state.presets[0].value
  };
};

let timerID;

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    tick: () => dispatch({ type: "TICK" }),
    play: () => {
      dispatch({ type: "PLAY" });
      timerID = setInterval(() => {
        dispatch({ type: "TICK" });
      }, "1000");
    },
    pause: () => {
      dispatch({ type: "PAUSE" });
      clearInterval(timerID);
    },
    reset: value => {
      dispatch({ type: "PAUSE" });
      dispatch({ type: "SET_TIME", payload: value * 60 });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
