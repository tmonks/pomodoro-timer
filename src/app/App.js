import React, { useEffect } from "react";
import "./App.scss";
import Timer from "../timer/Timer";
import Preset from "../preset/Preset";
import { connect } from "react-redux";
import soundfile from "../assets/beep-beep-bopbop-bop-bop.mp3";
import * as actions from "./actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndoAlt } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

let audioRef = null;

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

  /* clear interval on unmount */
  useEffect(() => {
    return () => {
      if (props.running) {
        props.toggle();
      }
    };
  }, []);

  return (
    <div className="app">
      <Helmet>
        <title>{props.running ? props.label + ": " + formattedTimeLeft : "Pomodoro Timer"}</title>
      </Helmet>
      <h1>POMODORO TIMER</h1>
      <div className="presets">
        <Preset
          index={0}
          id="session"
          increment={() => props.increment(0)}
          decrement={() => props.decrement(0)}
          label={props.presets[0].label}
          value={props.presets[0].value}
          active={props.running && props.currentPreset == 0}
        />
        <Preset
          index={1}
          id="break"
          increment={() => props.increment(1)}
          decrement={() => props.decrement(1)}
          label={props.presets[1].label}
          value={props.presets[1].value}
          active={props.running && props.currentPreset == 1}
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
      <div id="reset" onClick={() => props.reset(audioRef)}>
        <FontAwesomeIcon icon={faUndoAlt} />
      </div>
      <audio ref={props.setAudioRef} src={soundfile} id="beep" />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    label: state.presets[state.app.currentPreset].label,
    startTime: state.presets[state.app.currentPreset].value * 60,
    timeLeft: state.timer.timeLeft,
    running: state.timer.running,
    presets: state.presets,
    currentPreset: state.app.currentPreset,
    audioRef: state.timer.audioRef
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggle: () => dispatch(actions.toggle()),
    reset: () => dispatch(actions.reset()),
    increment: index => dispatch(actions.increment(index)),
    decrement: index => dispatch(actions.decrement(index)),
    setAudioRef: audioRef => dispatch(actions.setAudioRef(audioRef))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
