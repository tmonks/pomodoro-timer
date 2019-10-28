const initialState = {
  label: "Work",
  timeLeft: 25 * 60,
  // timeLeft: 5,
  running: false,
  // currentPreset: 0,
  // audioRef: null,
  intervalID: null
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    // case "SET_TIME":
    //   return { ...state, timeLeft: action.payload };
    case "TICK":
      return { ...state, timeLeft: state.timeLeft - 1 };
    case "START":
      return { ...state, running: true };
    case "STOP":
      return { ...state, running: false };
    case "INCREMENT":
      if (action.label === state.label && !state.running) {
        return { ...state, timeLeft: action.newValue * 60 };
      }
      return state;
    case "DECREMENT":
      if (action.label === state.label && !state.running) {
        return { ...state, timeLeft: action.newValue * 60 };
      }
      return state;
    case "RESET":
      // return {
      //   ...state,
      //   timeLeft: initialState.timeLeft,
      //   running: false,
      //   currentPreset: 0,
      //   label: initialState.label
      // };
      return initialState;
    case "NEXT_PRESET":
      return {
        ...state,
        // newPreset: action.index,
        timeLeft: action.timeLeft,
        label: action.label
      };
    // case "SET_AUDIO_REF":
    //   return {
    //     ...state,
    //     audioRef: action.payload
    //   };
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
