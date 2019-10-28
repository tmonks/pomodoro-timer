export const increment = id => {
  return (dispatch, getState) => {
    const { presets } = getState();
    if (presets[id].value < 60) {
      dispatch({
        type: "INCREMENT",
        id: id,
        label: presets[id].label,
        newValue: presets[id].value + 1
      });
    }
  };
};

export const decrement = id => {
  return (dispatch, getState) => {
    const { presets } = getState();
    if (presets[id].value > 1) {
      dispatch({
        type: "DECREMENT",
        id: id,
        label: presets[id].label,
        newValue: presets[id].value - 1
      });
    }
  };
};
