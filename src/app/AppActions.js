export const reset = () => {
  return (dispatch, getState) => {
    const { timer } = getState();
    /* TODO: handling audioRef would ideally be controlled by Timer */
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

export const nextPreset = () => {
  return (dispatch, getState) => {
    const { app, presets } = getState();
    const nextPreset = (app.currentPreset + 1) % presets.length;
    console.log("Next Preset");

    dispatch({
      type: "NEXT_PRESET",
      newPreset: nextPreset,
      timeLeft: presets[nextPreset].value * 60,
      label: presets[nextPreset].label
    });
  };
};
