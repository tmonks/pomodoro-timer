const initialState = [
  {
    label: "Work",
    value: 25
  },
  {
    label: "Break",
    value: 5
  }
];

const presetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      // state = [...state];
      // state[action.id].value++;
      // newPresets[action.id].label = "incremented";
      return state.map((preset, index) => {
        if (index === action.id) {
          return { ...preset, value: preset.value + 1 };
        }
        return preset;
      });
    case "DECREMENT":
      // let newState = [...state];
      // newState[action.id].value--;
      // newPresets[action.id].label = "decremented";
      return state.map((preset, index) => {
        if (action.id === index) {
          return { ...preset, value: preset.value - 1 };
        }
        return preset;
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
