const MILLISECONDS = 1000;
// const MILLISECONDS = 30;

/* redux-thunk action creator to switch to next preset */
export const nextPreset = () => {
  return (dispatch, getState) => {
    const { timer, presets } = getState();
    let nextPreset = (timer.currentPreset + 1) % presets.length;

    dispatch({
      type: "NEXT_PRESET",
      index: nextPreset,
      timeLeft: presets[nextPreset].value * 60,
      label: presets[nextPreset].label
    });
  };
};

export const tick = () => {
  return (dispatch, getState) => {
    const { timer } = getState();
    if (timer.timeLeft <= 0) {
      const { timer, presets } = getState();
      let nextPreset = (timer.currentPreset + 1) % presets.length;
      let audioPromise = timer.audioRef.play();

      if (audioPromise !== undefined) {
        audioPromise
          .then(() => {
            console.log("RIIIINGG!");
          })
          .catch(error => {
            console.log("audio playback failed: " + error);
          });
      }

      dispatch({
        type: "NEXT_PRESET",
        index: nextPreset,
        timeLeft: presets[nextPreset].value * 60,
        label: presets[nextPreset].label
      });
    } else {
      dispatch({ type: "TICK" });
    }
  };
};

export const increment = index => {
  return (dispatch, getState) => {
    const { presets, timer } = getState();
    if (presets[index].value < 60) {
      /* if it's the current timer being updated, also set the timer's time to match */
      if (index === timer.currentPreset) {
        dispatch({
          type: "SET_TIME",
          payload: (presets[index].value + 1) * 60
        });
      }
      dispatch({ type: "INCREMENT", id: index });
    }
  };
};

export const decrement = index => {
  return (dispatch, getState) => {
    const { presets, timer } = getState();
    if (presets[index].value > 1) {
      /* if it's the current timer being updated, also set the timer's time to match */
      if (index === timer.currentPreset) {
        dispatch({
          type: "SET_TIME",
          payload: (presets[index].value - 1) * 60
        });
      }
      dispatch({ type: "DECREMENT", id: index });
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

export const reset = myAudioRef => {
  return (dispatch, getState) => {
    const { timer } = getState();
    let pausePromise = timer.audioRef.pause();
    if (pausePromise !== undefined) {
      pausePromise
        .then(() => {
          console.log("stopping audio");
        })
        .catch(error => {
          console.log("error stopping audio: " + error);
        });
    }
    timer.audioRef.currentTime = 0;
    // audioRef.load();
    if (timer.running) {
      clearInterval(timer.intervalID);
    }
    dispatch({ type: "RESET" });
  };
};

export const testPlay = () => {
  return (undefined, getState) => {
    const { timer } = getState();
    // console.log(timer.currentPreset);
    let playPromise = timer.audioRef.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log("test play successful!");
        })
        .catch(error => {
          console.log("test play NOT successful: " + error);
        });
    }
  };
};
