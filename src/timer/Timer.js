import React from "react";

export default function Timer(props) {
  let currentTime = props.timeLeft;
  let minutesLeft = Math.floor(currentTime / 60);
  let secondsLeft = currentTime % 60;

  let styles = props.running ? { color: "green" } : { color: "black" };

  return (
    <div>
      <h1 style={styles}>
        {props.label}: {minutesLeft + ":" + secondsLeft}
      </h1>
      <button onClick={props.play}>Play</button>
      <button onClick={props.pause}>Pause</button>
      <button onClick={props.reset}>Reset</button>
    </div>
  );
}
