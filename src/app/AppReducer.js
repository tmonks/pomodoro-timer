const initialState = {
  currentPreset: 0
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEXT_PRESET":
      return { ...state, currentPreset: action.newPreset };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export default appReducer;
