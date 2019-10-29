const initialState = [
  {
    id: "session",
    label: "Work",
    value: 25
  },
  {
    id: "break",
    label: "Break",
    value: 5
  }
];

const presetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state.map((preset, index) => {
        if (index === action.id) {
          return { ...preset, value: preset.value + 1 };
        }
        return preset;
      });
    case "DECREMENT":
      return state.map((preset, index) => {
        if (action.id === index) {
          return { ...preset, value: preset.value - 1 };
        }
        return preset;
      });
    case "RESET":
      return initialState;
    // return state.map((preset, index) => {
    //   return { ...preset, value: initialState[index].value };
    // });
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
