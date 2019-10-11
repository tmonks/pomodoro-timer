import React from "react";

export default function Timer(props) {
  let currentTime = props.timeLeft;
  let minutesLeft = Math.floor(currentTime / 60);
  let secondsLeft = currentTime % 60;

  secondsLeft = secondsLeft.toString().padStart(2, "0");

  let styles = props.running ? { color: "green" } : { color: "black" };

  return (
    <div>
      <h3 id="timer-label">{props.label}</h3>
      <h1 id="time-left" style={styles}>
        {minutesLeft + ":" + secondsLeft}
      </h1>
      <button id="start_stop" onClick={props.toggle}>
        {props.running ? "Pause" : "Play"}
      </button>
      <button id="reset" onClick={props.reset}>
        Reset
      </button>
    </div>
  );
}
