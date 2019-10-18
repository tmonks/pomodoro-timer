import React from "react";
import "./Timer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

export default function Timer(props) {
  // let styles = props.running ? { color: "white" } : { color: "lightgray" };
  const displaySize = 200;
  const strokeWidth = 12;
  const strokeLength = displaySize * Math.PI;
  const strokeOffset = strokeLength - strokeLength * (1 - props.percent);

  return (
    <div className="timer-container">
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
        <div id="time-left">{props.timeLeft}</div>
        <div id="start_stop" id="start_stop" onClick={props.toggle}>
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
