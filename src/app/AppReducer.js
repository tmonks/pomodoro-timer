const initialState = {
  currentPreset: 0,
  audioRef: null
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEXT_PRESET":
      return { ...state, currentPreset: action.newPreset };
    case "SET_AUDIO_REF":
      return {
        ...state,
        audioRef: action.payload
      };
    case "RESET":
      /* reset currentPreset, but NOT audioRef */
      return { ...state, currentPreset: initialState.currentPreset };
    default:
      return state;
  }
};

export default appReducer;
