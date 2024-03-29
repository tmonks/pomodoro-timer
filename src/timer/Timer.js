import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import "./Timer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

function Timer(props) {
  const displaySize = 200;
  const strokeWidth = 12;
  const circumference = (displaySize - strokeWidth) * Math.PI;
  const percentLeft = props.timeLeft / props.startTime;

  /* strokeOffset needs to start from the circumference (completely hidden)
     and progress to 0 (completely shown) */
  const strokeOffset = circumference * percentLeft;

  const intervalID = props.intervalID;
  const isRunning = props.running;

  /* clear interval on unmount */
  useEffect(() => {
    return () => {
      if (isRunning) {
        clearInterval(intervalID);
      }
    };
  }, [isRunning, intervalID]);

  /* convert time in seconts to MM:SS */
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
          {props.running ? formattedTimeLeft + " (" + props.label + ")" : "Pomodoro Timer"}
        </title>
      </Helmet>
      <svg
        className="progress"
        width={displaySize}
        height={displaySize}
        viewBox={"0 0 " + displaySize + " " + displaySize}
      >
        {/* Empty radial progress meter */}
        <circle
          className="progress-meter"
          cx={displaySize / 2}
          cy={displaySize / 2}
          r={(displaySize - strokeWidth) / 2}
          fill="none"
          strokeWidth={strokeWidth - 2}
        />
        {/* Radial progress meter value */}
        <circle
          className="progress-value"
          cx={displaySize / 2}
          cy={displaySize / 2}
          r={(displaySize - strokeWidth) / 2}
          fill="none"
          strokeWidth={strokeWidth}
          /* strokeDasharray sets the length of the dashes in the stroke. When it's set to the
             circumference, it will fill up the entire circle */
          strokeDasharray={circumference}
          strokeDashoffset={strokeOffset.toString()}
        />
      </svg>
      <div
        className="timer-display"
        id="start_stop"
        onClick={props.running ? props.stop : props.start}
      >
        <div id="timer-label">{props.label}</div>
        <div id="time-left">{formattedTimeLeft}</div>
        <div id="start_stop_icon">
          <FontAwesomeIcon icon={props.running ? faPause : faPlay} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    timeLeft: state.timer.timeLeft,
    running: state.timer.running,
    audioRef: state.timer.audioRef,
    intervalID: state.timer.intervalID
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    start: () => dispatch({ type: "START" }),
    stop: () => dispatch({ type: "STOP" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
