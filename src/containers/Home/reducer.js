import { createSlice } from "@reduxjs/toolkit";
import TRANSCRIPT_JSON from "../../assets/audios/transcript.json";

const configSlice = createSlice({
  name: "home",
  initialState: {
    audioControlBar: {
      playing: false,
    },
    transcript: TRANSCRIPT_JSON
  },
  reducers: {
    togglePlayPause(state, action) {
      state.audioControlBar.playing = !state.audioControlBar.playing;
    },
  },
});

// Extract the action creators object and the reducer
const { actions, reducer } = configSlice;
// Extract and export each action creator by name
export const { togglePlayPause } = actions;
// Export the reducer, either as a default or named export
export default reducer;
