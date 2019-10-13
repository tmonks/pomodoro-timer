const initialState = [
  {
    label: "Work",
    value: 1
  },
  {
    label: "Break",
    value: 1
  }
];

const presetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      if (state[action.id].value < 60) {
        return state.map((preset, index) => {
          if (index === action.id) {
            return { ...preset, value: preset.value + 1 };
          }
          return preset;
        });
      }
      return state;
    case "DECREMENT":
      if (state[action.id].value > 1) {
        return state.map((preset, index) => {
          if (action.id === index) {
            return { ...preset, value: preset.value - 1 };
          }
          return preset;
        });
      }
      return state;
    case "RESET":
      return state.map((preset, index) => {
        return { ...preset, value: initialState[index].value };
      });
    default:
      return state;
  }
};

/*
const initialState = {
  label: "Work",
  value: 25
};

const presetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value + 1 };
    case "DECREMENT":
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};
*/

export default presetReducer;
