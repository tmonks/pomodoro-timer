import React from "react";
import { connect } from "react-redux";

import "./Preset.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

function Preset(props) {
  const activeStyleContainer = {
    borderBottom: "4px solid #29a4b5"
  };

  const activeStyleArrow = {
    cursor: "default"
  };

  return (
    <div className="preset-container" style={props.active ? activeStyleContainer : null}>
      {/* left arrow button */}
      <div
        className="arrow"
        onClick={props.active ? null : props.decrement}
        id={props.id + "-decrement"}
        style={props.active ? activeStyleArrow : null}
      >
        <FontAwesomeIcon icon={faCaretLeft} />
      </div>

      {/* Preset value & label */}
      <div className="values">
        <div id={props.id + "-length"} className="preset-value">
          {props.value}
        </div>
        <div id={props.id + "-label"} className="preset-label">
          {props.label}
        </div>
      </div>

      {/* right arrow button */}
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

const increment = id => {
  return { type: "INCREMENT", id };
};

const decrement = id => {
  return { type: "DECREMENT", id };
};

const mapStateToProps = (state, ownProps) => {
  return {
    label: state.presets[ownProps.index].label,
    value: state.presets[ownProps.index].value,
    id: state.presets[ownProps.index].id
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: () => dispatch(increment(ownProps.index)),
    decrement: () => dispatch(decrement(ownProps.index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preset);
