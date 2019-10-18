import React from "react";
import "./Preset.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretSquareLeft,
  faCaretSquareRight,
  faCaretRight,
  faChevronCircleLeft,
  faChevronCircleRight
} from "@fortawesome/free-solid-svg-icons";

export default function Preset(props) {
  // const paddedValue = props.value.toString().padStart(2, "0");

  return (
    <div className="preset-container">
      <div className="arrow" onClick={props.decrement} id={props.id + "-decrement"}>
        {/* ◄ */}
        <FontAwesomeIcon icon={faCaretSquareLeft} />
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
        {/* ► */}
        <FontAwesomeIcon icon={faCaretSquareRight} />
      </div>
    </div>
  );
}
