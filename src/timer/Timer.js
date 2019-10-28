import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import "./Timer.scss";
import * as actions from "./TimerActions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

function Timer(props) {
  // let styles = props.running ? { color: "white" } : { color: "lightgray" };
  const displaySize = 200;
  const strokeWidth = 12;
  const strokeLength = displaySize * Math.PI;
  const percentLeft = props.timeLeft / props.startTime;
  const strokeOffset = strokeLength * percentLeft;

  const formatTime = seconds => {
    let minutesLeft = Math.floor(seconds / 60);
    let secondsLeft = seconds % 60;

    secondsLeft = secondsLeft.toString().padStart(2, "0");
    minutesLeft = minutesLeft.toString().padStart(2, "0");
    return minutesLeft + ":" + secondsLeft;
  };

  const formattedTimeLeft = formatTime(props.timeLeft);

  return (
    <div className="timer-container">
      {" "}
      <Helmet>
        <title>
          {props.running
            ? props.label + ": " + formattedTimeLeft
            : "Pomodoro Timer"}
        </title>
      </Helmet>
      <svg
        className="progress"
        width={displaySize}
        height={displaySize}
        viewBox={"0 0 " + displaySize + " " + displaySize}
      >
        <circle
          className="progress-meter"
          cx={displaySize / 2}
          cy={displaySize / 2}
          r={(displaySize - strokeWidth) / 2}
          fill="none"
          strokeWidth={strokeWidth - 2}
        />
        <circle
          className="progress-value"
          cx={displaySize / 2}
          cy={displaySize / 2}
          r={(displaySize - strokeWidth) / 2}
          fill="none"
          strokeWidth={strokeWidth}
          strokeDasharray={strokeLength}
          strokeDashoffset={strokeOffset.toString()}
        />
      </svg>
      <div className="timer-display">
        <div id="timer-label">{props.label}</div>
        <div id="time-left">{formattedTimeLeft}</div>
        <div id="start_stop" onClick={props.toggle}>
          <FontAwesomeIcon icon={props.running ? faPause : faPlay} />
        </div>
      </div>
      {/* <button id="start_stop" onClick={props.toggle} className="">
        {props.running ? "Pause" : "Play"}
      </button>
      <button id="reset" onClick={props.reset}>
        Reset
  </button> */}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    timeLeft: state.timer.timeLeft,
    running: state.timer.running,
    audioRef: state.timer.audioRef
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggle: () => dispatch(actions.toggle(ownProps.finished))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
