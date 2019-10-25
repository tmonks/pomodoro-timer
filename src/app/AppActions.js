export const increment = index => {
  return (dispatch, getState) => {
    const { presets, timer } = getState();
    if (presets[index].value < 60) {
      /* if it's the current timer being updated, also set the timer's time to match */
      // if (index === timer.currentPreset) {
      //   dispatch({
      //     type: "SET_TIME",
      //     payload: (presets[index].value + 1) * 60
      //   });
      // }
      dispatch({ type: "INCREMENT", id: index });
    }
  };
};

export const decrement = index => {
  return (dispatch, getState) => {
    const { presets, timer } = getState();
    if (presets[index].value > 1) {
      /* if it's the current timer being updated, also set the timer's time to match */
      // if (index === timer.currentPreset) {
      //   dispatch({
      //     type: "SET_TIME",
      //     payload: (presets[index].value - 1) * 60
      //   });
      // }
      dispatch({ type: "DECREMENT", id: index });
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
