import React from "react";
import { connect } from "react-redux";

function Preset(props) {
  return (
    <div>
      {props.label}:<button onClick={props.decrement}>&lt;</button>
      {props.value}
      <button onClick={props.increment}>&gt;</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    label: state.presets[ownProps.id].label,
    value: state.presets[ownProps.id].value
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: () => dispatch({ type: "INCREMENT", id: ownProps.id }),
    decrement: () => dispatch({ type: "DECREMENT", id: ownProps.id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preset);
