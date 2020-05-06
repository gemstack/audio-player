import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "home",
  initialState: {},
  reducers: {},
});

// Extract the action creators object and the reducer
const { actions, reducer } = configSlice;
// Extract and export each action creator by name
export const {} = actions;
// Export the reducer, either as a default or named export
export default reducer;
