import React from "react";
import "./Preset.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretSquareLeft,
  faCaretSquareRight,
  faCaretLeft,
  faCaretRight,
  faChevronCircleLeft,
  faChevronCircleRight,
  faChevronLeft,
  faChevronRight,
  faAngleLeft,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";

export default function Preset(props) {
  // const paddedValue = props.value.toString().padStart(2, "0");

  const activeStyleContainer = {
    borderBottom: "4px solid #29a4b5"
  };

  const activeStyleArrow = {
    cursor: "default"
    // opacity: 0.25
  };

  return (
    <div className="preset-container" style={props.active ? activeStyleContainer : null}>
      <div
        className="arrow"
        onClick={props.active ? null : props.decrement}
        id={props.id + "-decrement"}
        style={props.active ? activeStyleArrow : null}
      >
        <FontAwesomeIcon icon={faCaretLeft} />
      </div>
      <div className="values">
        <div id={props.id + "-length"} className="preset-value">
          {props.value}
        </div>
        <div id={props.id + "-label"} className="preset-label">
          {props.label}
        </div>
      </div>
      <div
        className="arrow"
        onClick={props.active ? null : props.increment}
        id={props.id + "-increment"}
        style={props.active ? activeStyleArrow : null}
      >
        <FontAwesomeIcon icon={faCaretRight} />
      </div>
    </div>
  );
}
