export const increment = index => {
  return (dispatch, getState) => {
    const { presets, timer } = getState();
    if (presets[index].value < 60) {
      dispatch({ type: "INCREMENT", id: index });
    }
  };
};

export const decrement = index => {
  return (dispatch, getState) => {
    const { presets, timer } = getState();
    if (presets[index].value > 1) {
      dispatch({ type: "DECREMENT", id: index });
    }
  };
};

export const reset = () => {
  return (dispatch, getState) => {
    const { timer } = getState();
    timer.audioRef.pause();
    timer.audioRef.currentTime = 0;

    if (timer.running) {
      clearInterval(timer.intervalID);
    }
    dispatch({ type: "RESET" });
  };
};

export const setAudioRef = audioRef => {
  return {
    type: "SET_AUDIO_REF",
    payload: audioRef
  };
};
