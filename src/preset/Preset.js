import React from "react";
import { connect } from "react-redux";

function Preset(props) {
  return (
    <div>
      <div id={props.id + "-label"}>{props.label}</div>
      <button onClick={props.decrement} id={props.id + "-decrement"}>
        &lt;
      </button>
      <span id={props.id + "-length"}>{props.value}</span>
      <button onClick={props.increment} id={props.id + "-increment"}>
        &gt;
      </button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    label: state.presets[ownProps.index].label,
    value: state.presets[ownProps.index].value
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: () => dispatch({ type: "INCREMENT", id: ownProps.index }),
    decrement: () => dispatch({ type: "DECREMENT", id: ownProps.index })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preset);
