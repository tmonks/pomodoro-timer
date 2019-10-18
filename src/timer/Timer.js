import React from "react";
import "./Timer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

export default function Timer(props) {
  // let styles = props.running ? { color: "white" } : { color: "lightgray" };

  return (
    <div className="timer-container">
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
