const initialState = {
  activePreset: 0,
  audioRef: null
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEXT_PRESET":
      return { ...state, activePreset: action.newPreset };
    case "SET_AUDIO_REF":
      return {
        ...state,
        audioRef: action.payload
      };
    case "RESET":
      /* reset activePreset, but NOT audioRef */
      return { ...state, activePreset: initialState.activePreset };
    default:
      return state;
  }
};

export default appReducer;
