import { createSlice } from "@reduxjs/toolkit";
import TRANSCRIPT_JSON from "../../data/transcript.json";

const configSlice = createSlice({
  name: "audio",
  initialState: {
    transcript: TRANSCRIPT_JSON,
    currentTime: 0,
    duration: 0,
    seekTime: 0,
    isPlaying: false,
  },
  reducers: {
    updateAudioPlayingStatus(state, action) {
      state.isPlaying = action.payload;
    },
    updateCurrentTime(state, action) {
      state.currentTime = action.payload;
    },
    updateAudioDuration(state, action) {
      state.duration = action.payload;
    },
    setSeekTime(state, action) {
      state.seekTime = action.payload;
    },
  },
});

// Extract the action creators object and the reducer
const { actions, reducer } = configSlice;
// Extract and export each action creator by name
export const {
  updateCurrentTime,
  updateAudioDuration,
  setSeekTime,
  updateAudioPlayingStatus,
} = actions;
// Export the reducer, either as a default or named export
export default reducer;
