export const audioMiddleware = store => next => action => {
  const { app } = store.getState();
  switch (action.type) {
    case "NEXT_PRESET":
      let audioPromise = app.audioRef.play();
      if (audioPromise !== undefined) {
        audioPromise.catch(error => {
          console.log("audio playback failed: " + error);
        });
      }
      break;
    case "RESET":
    case "STOP":
      app.audioRef.pause();
      app.audioRef.currentTime = 0;
      break;
    default:
      break;
  }
  next(action);
};

export const timerMiddleware = store => next => action => {
  const { app, timer, presets } = store.getState();
  let currentPresetValue = null;
  switch (action.type) {
    case "INCREMENT":
      // add in data to tell the timer if/how to update
      action.updateTimer = app.currentPreset === action.id;
      currentPresetValue = presets[action.id].value;
      action.newValue = currentPresetValue < 60 ? currentPresetValue + 1 : currentPresetValue;
      next(action);
      break;
    case "DECREMENT":
      // add in data to tell the timer if/how to update
      action.updateTimer = app.currentPreset === action.id;
      currentPresetValue = presets[action.id].value;
      action.newValue = currentPresetValue > 1 ? currentPresetValue - 1 : currentPresetValue;
      next(action);
      break;
    case "START":
      let intervalID = setInterval(() => {
        store.dispatch({ type: "TICK" });
      }, 1000);
      store.dispatch({ type: "SET_INTERVAL", payload: intervalID });
      next(action);
      break;
    case "RESET":
    case "STOP":
      clearInterval(timer.intervalID);
      next(action);
      break;
    case "TICK":
      if (timer.timeLeft <= 0) {
        const { app, presets } = store.getState();
        const nextPreset = (app.currentPreset + 1) % presets.length;
        store.dispatch({
          type: "NEXT_PRESET",
          newPreset: nextPreset,
          timeLeft: presets[nextPreset].value * 60,
          label: presets[nextPreset].label
        });
      } else {
        next(action);
      }
      break;
    default:
      next(action);
      break;
  }
};
