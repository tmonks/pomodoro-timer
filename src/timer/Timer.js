import React from "react";

export default function Timer(props) {
  let currentTime = props.timeLeft;
  let minutesLeft = Math.floor(currentTime / 60);
  let secondsLeft = currentTime % 60;

  return (
    <div>
      <h1>{minutesLeft + ":" + secondsLeft}</h1>
    </div>
  );
}
