export const reset = () => {
  return { type: "RESET" };
};

export const setAudioRef = audioRef => {
  return {
    type: "SET_AUDIO_REF",
    payload: audioRef
  };
};
