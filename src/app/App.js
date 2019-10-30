import React from "react";
import { connect } from "react-redux";

import Timer from "../timer/Timer";
import Preset from "../preset/Preset";

import "./App.scss";
import soundfile from "../assets/beep-beep-bopbop-bop-bop.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndoAlt } from "@fortawesome/free-solid-svg-icons";

function App(props) {
  return (
    <div className="app">
      <h1>POMODORO TIMER</h1>
      <div className="presets-container">
        <Preset index={0} active={props.running && props.currentPreset === 0} />
        <Preset index={1} active={props.running && props.currentPreset === 1} />
      </div>
      <Timer label={props.label} startTime={props.startTime} reset={props.reset} />
      <div id="reset" onClick={() => props.reset()}>
        <FontAwesomeIcon icon={faUndoAlt} />
      </div>
      <audio ref={props.setAudioRef} src={soundfile} id="beep" />
    </div>
  );
}

const reset = () => {
  return { type: "RESET" };
};

/* save a ref to an audio element in order to control playback */
const setAudioRef = audioRef => {
  return {
    type: "SET_AUDIO_REF",
    payload: audioRef
  };
};

const mapStateToProps = state => {
  return {
    label: state.presets[state.app.currentPreset].label,
    startTime: state.presets[state.app.currentPreset].value * 60,
    running: state.timer.running,
    currentPreset: state.app.currentPreset
  };
};

const mapDispatchToProps = dispatch => {
  return {
    reset: () => dispatch(reset()),
    setAudioRef: audioRef => dispatch(setAudioRef(audioRef))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
