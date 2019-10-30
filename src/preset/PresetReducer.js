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
      /* increment the value for the preset matching id, if < the max of 60 */
      return state.map((preset, index) => {
        if (index === action.id && preset.value < 60) {
          return { ...preset, value: preset.value + 1 };
        }
        return preset;
      });
    case "DECREMENT":
      /* increment the value for the preset matching id, if > the max of 1 */
      return state.map((preset, index) => {
        if (action.id === index && preset.value > 1) {
          return { ...preset, value: preset.value - 1 };
        }
        return preset;
      });
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export default presetReducer;
