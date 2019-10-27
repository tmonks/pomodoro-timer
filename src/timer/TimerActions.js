const MILLISECONDS = 1000;
// const MILLISECONDS = 30;

export const tick = finished => {
  return (dispatch, getState) => {
    const { app, timer, presets } = getState();
    if (timer.timeLeft <= 0) {
      // let audioPromise = timer.audioRef.play();

      // if (audioPromise !== undefined) {
      //   audioPromise.catch(error => {
      //     console.log("audio playback failed: " + error);
      //   });
      // }

      finished();
      /* TODO: handling next preset would ideally be handled by App */

      // let nextPreset = (app.currentPreset + 1) % presets.length;

      // dispatch({
      //   type: "NEXT_PRESET",
      //   newPreset: nextPreset,
      //   timeLeft: presets[nextPreset].value * 60,
      //   label: presets[nextPreset].label
      // });
    } else {
      dispatch({ type: "TICK" });
    }
  };
};

export const toggle = finished => {
  return (dispatch, getState) => {
    const { timer } = getState();
    if (!timer.running) {
      let intervalID = setInterval(() => {
        dispatch(tick(finished));
      }, MILLISECONDS);
      dispatch({ type: "START" });
      dispatch({ type: "SET_INTERVAL", payload: intervalID });
    } else {
      clearInterval(timer.intervalID);
      dispatch({ type: "STOP" });
    }
  };
};
