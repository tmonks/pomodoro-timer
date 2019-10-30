const initialState = {
  label: "Work",
  timeLeft: 25 * 60,
  running: false,
  intervalID: null
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TICK":
      return { ...state, timeLeft: state.timeLeft - 1 };
    case "START":
      return { ...state, running: true };
    case "STOP":
      return { ...state, running: false };
    case "INCREMENT":
      /* increment if the timer isn't running and the active preset is being updated */
      if (action.isActivePreset && !state.running) {
        return { ...state, timeLeft: action.newValue * 60 };
      }
      return state;
    case "DECREMENT":
      /* decrement if the timer isn't running and the active preset is being updated */
      if (action.isActivePreset && !state.running) {
        return { ...state, timeLeft: action.newValue * 60 };
      }
      return state;
    case "RESET":
      return initialState;
    case "NEXT_PRESET":
      /* update the timeLeft and label to the next preset */
      return {
        ...state,
        timeLeft: action.timeLeft,
        label: action.label
      };
    case "SET_INTERVAL":
      return {
        ...state,
        intervalID: action.payload
      };
    default:
      return state;
  }
};

export default timerReducer;
