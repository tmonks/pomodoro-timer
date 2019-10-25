const MILLISECONDS = 1000;
// const MILLISECONDS = 30;

export const tick = () => {
  return (dispatch, getState) => {
    const { app, timer } = getState();
    if (timer.timeLeft <= 0) {
      const { timer, presets } = getState();
      let nextPreset = (app.currentPreset + 1) % presets.length;
      let audioPromise = timer.audioRef.play();

      if (audioPromise !== undefined) {
        audioPromise.catch(error => {
          console.log("audio playback failed: " + error);
        });
      }

      dispatch({
        type: "NEXT_PRESET",
        newPreset: nextPreset,
        timeLeft: presets[nextPreset].value * 60,
        label: presets[nextPreset].label
      });
    } else {
      dispatch({ type: "TICK" });
    }
  };
};

export const toggle = () => {
  return (dispatch, getState) => {
    const { timer } = getState();
    if (!timer.running) {
      let intervalID = setInterval(() => {
        dispatch(tick());
      }, MILLISECONDS);
      dispatch({ type: "START" });
      dispatch({ type: "SET_INTERVAL", payload: intervalID });
    } else {
      clearInterval(timer.intervalID);
      dispatch({ type: "STOP" });
    }
  };
};
