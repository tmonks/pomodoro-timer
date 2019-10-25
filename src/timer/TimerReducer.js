const SECONDS = 60;
// const SECONDS = 1;

const initialState = {
  label: "Work",
  timeLeft: 25 * 60,
  // timeLeft: 5,
  running: false,
  // currentPreset: 0,
  audioRef: null,
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
      if (action.id === 0) {
        return { ...state, timeLeft: state.timeLeft + 60 };
      }
      return state;
    case "DECREMENT":
      if (action.id === 0) {
        return { ...state, timeLeft: state.timeLeft - 60 };
      }
      return state;
    case "RESET":
      return {
        ...state,
        timeLeft: initialState.timeLeft,
        running: false,
        currentPreset: 0,
        label: initialState.label
      };
    case "NEXT_PRESET":
      return {
        ...state,
        newPreset: action.index,
        timeLeft: action.timeLeft,
        label: action.label
      };
    case "SET_AUDIO_REF":
      return {
        ...state,
        audioRef: action.payload
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

/*
  if (action.type === "PLAY") {
    return action.time * 60;
  } else if (action.type === "TICK") {
    return state - 1;
  } else {
    return state;
  }

*/
