const initialState = {
  label: "Work",
  timeLeft: 25 * 60,
  running: false
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TIME":
      return { ...state, timeLeft: action.payload };
    case "TICK":
      if (state.timeLeft > 0) {
        return { ...state, timeLeft: state.timeLeft - 1 };
      }
      return state;
    case "PLAY":
      return { ...state, running: true };
    case "PAUSE":
      return { ...state, running: false };
    case "INCREMENT":
      if (action.id === 0 && state.timeLeft < 60 * 60) {
        return { ...state, timeLeft: state.timeLeft + 60 };
      }
      return state;
    case "DECREMENT":
      if (action.id === 0) {
        return { ...state, timeLeft: state.timeLeft - 60 };
      }
      return state;
    case "RESET":
      return { ...state, timeLeft: initialState.timeLeft, running: false };
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
