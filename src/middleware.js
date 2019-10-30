// handles starting and stopping the alarm sound
export const audioMiddleware = store => next => action => {
  const { app } = store.getState();
  switch (action.type) {
    case "NEXT_PRESET":
      // play alarm sound when switching to the next preset
      let audioPromise = app.audioRef.play();
      if (audioPromise !== undefined) {
        audioPromise.catch(error => {
          console.log("audio playback failed: " + error);
        });
      }
      break;
    case "RESET":
    case "STOP":
      // stop and rewind when timer is stopped or reset
      app.audioRef.pause();
      app.audioRef.currentTime = 0;
      break;
    default:
      break;
  }
  next(action);
};

// handles the interval and interaction between Timer, Preset, and App components
export const timerMiddleware = store => next => action => {
  const { app, timer, presets } = store.getState();
  let activePresetValue = null;
  switch (action.type) {
    case "INCREMENT":
      // add data from app and preset state to the action to tell the timer if/how to update
      action.isActivePreset = app.activePreset === action.id;
      activePresetValue = presets[action.id].value;
      action.newValue = activePresetValue < 60 ? activePresetValue + 1 : activePresetValue;
      next(action);
      break;
    case "DECREMENT":
      // add data from app and preset state to the action to tell the timer if/how to update
      action.isActivePreset = app.activePreset === action.id;
      activePresetValue = presets[action.id].value;
      action.newValue = activePresetValue > 1 ? activePresetValue - 1 : activePresetValue;
      next(action);
      break;
    case "START":
      // start the interval to count down the time left
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
        // when timer reaches 0, identify and switch to the next preset
        const { app, presets } = store.getState();
        const nextPreset = (app.activePreset + 1) % presets.length;
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
