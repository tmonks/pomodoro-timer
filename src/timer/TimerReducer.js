const initialState = {
  sessionTitle: "Work",
  timeLeft: 25 * 60,
  running: false
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TIME":
      return { ...state, timeLeft: action.payload };
    case "TICK":
      return { ...state, timeLeft: state.timeLeft - 1 };
    case "PLAY":
      return { ...state, running: true };
    case "PAUSE":
      return { ...state, running: false };
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
