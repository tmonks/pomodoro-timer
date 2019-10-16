import React from "react";
import "./Preset.scss";

export default function Preset(props) {
  // const paddedValue = props.value.toString().padStart(2, "0");

  return (
    <div className="preset-container">
      <div className="arrow" onClick={props.decrement} id={props.id + "-decrement"}>
        ◄
      </div>
      <div className="values">
        <div id={props.id + "-length"} className="preset-value">
          {props.value}
        </div>
        <div id={props.id + "-label"} className="preset-label">
          {props.label}
        </div>
      </div>
      <div className="arrow" onClick={props.increment} id={props.id + "-increment"}>
        ►
      </div>
    </div>
  );
}
