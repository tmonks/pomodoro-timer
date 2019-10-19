import React, { useEffect } from "react";
import "./App.scss";
import Timer from "../timer/Timer";
import Preset from "../preset/Preset";
import { connect } from "react-redux";
import soundfile from "../assets/Twin-bell-alarm-clock.mp3";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faPauseCircle, faUndoAlt } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

let timerID = null;
let audioRef = null;
const MILLISECONDS = 1000;
// const MILLISECONDS = 30;

const formatTime = seconds => {
  let minutesLeft = Math.floor(seconds / 60);
  let secondsLeft = seconds % 60;

  secondsLeft = secondsLeft.toString().padStart(2, "0");
  minutesLeft = minutesLeft.toString().padStart(2, "0");
  return minutesLeft + ":" + secondsLeft;
};

function App(props) {
  const formattedTimeLeft = formatTime(props.timeLeft);
  const percent = props.timeLeft / props.startTime;
  console.log(percent + ": " + props.startTime + " / " + props.timeLeft);

  return (
    <div>
      <Helmet>
        <title>{props.running ? props.label + ": " + formattedTimeLeft : "Pomodoro Timer"}</title>
      </Helmet>
      <h1>POMODORO TIMER</h1>
      <div className="app">
        <div className="preset-container">
          <Preset
            index={0}
            id="session"
            increment={() => props.increment(0)}
            decrement={() => props.decrement(0)}
            label={props.presets[0].label}
            value={props.presets[0].value}
          />
          {/* <button id="reset" onClick={props.reset}>
            Reset
          </button> */}
          <Preset
            index={1}
            id="break"
            increment={() => props.increment(1)}
            decrement={() => props.decrement(1)}
            label={props.presets[1].label}
            value={props.presets[1].value}
          />
        </div>
        <Timer
          label={props.label}
          timeLeft={formattedTimeLeft}
          running={props.running}
          toggle={props.toggle}
          reset={props.reset}
          percent={percent}
        />
        <div id="reset" onClick={props.reset}>
          <FontAwesomeIcon icon={faUndoAlt} />
        </div>
        {/* <FontAwesomeIcon
          id="start_stop"
          onClick={props.toggle}
          icon={props.running ? faPauseCircle : faPlayCircle}
        /> */}
        {/* <button id="start_stop" onClick={props.toggle}>
          {props.running ? "Pause" : "Play"}
        </button> */}
        <audio
          ref={input => {
            audioRef = input;
          }}
          src={soundfile}
          id="beep"
        />
      </div>
    </div>
  );
}

/* redux-thunk action creator to switch to next preset */
const nextPreset = () => {
  return (dispatch, getState) => {
    const { timer, presets } = getState();
    let nextPreset = (timer.currentPreset + 1) % presets.length;

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
      const { timer, presets } = getState();
      let nextPreset = (timer.currentPreset + 1) % presets.length;
      let audioPromise = audioRef.play();

      if (audioPromise !== undefined) {
        audioPromise
          .then(() => {
            console.log("RIIIINGG!");
          })
          .catch(error => {
            console.log("audio playback failed: " + error);
          });
      }

      dispatch({
        type: "NEXT_PRESET",
        index: nextPreset,
        timeLeft: presets[nextPreset].value * 60,
        label: presets[nextPreset].label
      });
    } else {
      dispatch({ type: "TICK" });
    }
  };
};

const incrementAction = index => {
  return (dispatch, getState) => {
    const { presets, timer } = getState();
    if (!timer.running && presets[index].value < 60) {
      /* if it's the first timer being updated, also set the timer's time to match */
      if (index === 0) {
        dispatch({ type: "SET_TIME", payload: (presets[0].value + 1) * 60 });
      }
      dispatch({ type: "INCREMENT", id: index });
    }
  };
};

const decrementAction = index => {
  return (dispatch, getState) => {
    const { presets, timer } = getState();
    if (!timer.running && presets[index].value > 1) {
      if (index === 0) {
        dispatch({ type: "SET_TIME", payload: (presets[index].value - 1) * 60 });
      }
      dispatch({ type: "DECREMENT", id: index });
    }
  };
};

const toggleTimerAction = () => {
  return (dispatch, getState) => {
    const { timer } = getState();
    if (!timer.running) {
      timerID = setInterval(() => {
        dispatch(tick());
      }, MILLISECONDS);
      dispatch({ type: "START" });
    } else {
      clearInterval(timerID);
      dispatch({ type: "STOP" });
    }
  };
};

const resetAction = () => {
  return (dispatch, getState) => {
    const { timer } = getState();
    let pausePromise = audioRef.pause();
    if (pausePromise !== undefined) {
      pausePromise
        .then(() => {
          console.log("stopping audio");
        })
        .catch(error => {
          console.log("error stopping audio: " + error);
        });
    }
    audioRef.currentTime = 0;
    // audioRef.load();
    if (timer.running) {
      clearInterval(timerID);
    }
    dispatch({ type: "RESET" });
  };
};

const mapStateToProps = state => {
  return {
    label: state.presets[state.timer.currentPreset].label,
    startTime: state.presets[state.timer.currentPreset].value * 60,
    timeLeft: state.timer.timeLeft,
    running: state.timer.running,
    presets: state.presets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    tick: () => dispatch(tick()),
    toggle: () => dispatch(toggleTimerAction()),
    // start: () => dispatch({ type: "START" }),
    // stop: () => dispatch({ type: "STOP" }),
    reset: () => dispatch(resetAction()),
    nextPreset: () => dispatch(nextPreset()),
    increment: index => dispatch(incrementAction(index)),
    decrement: index => dispatch(decrementAction(index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
