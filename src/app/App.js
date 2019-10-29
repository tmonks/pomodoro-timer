import React, { useEffect } from "react";
import "./App.scss";
import Timer from "../timer/Timer";
import Preset from "../preset/Preset";
import { connect } from "react-redux";
import soundfile from "../assets/beep-beep-bopbop-bop-bop.mp3";
import * as actions from "./AppActions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndoAlt } from "@fortawesome/free-solid-svg-icons";

function App(props) {
  return (
    <div className="app">
      <h1>POMODORO TIMER</h1>
      <div className="presets">
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

const mapStateToProps = state => {
  return {
    label: state.presets[state.app.currentPreset].label,
    startTime: state.presets[state.app.currentPreset].value * 60,
    running: state.timer.running,
    presets: state.presets,
    currentPreset: state.app.currentPreset
  };
};

const mapDispatchToProps = dispatch => {
  return {
    reset: () => dispatch(actions.reset()),
    setAudioRef: audioRef => dispatch(actions.setAudioRef(audioRef))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
