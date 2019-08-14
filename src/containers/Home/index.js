import React from "react";
import AudioControlBar from "./components/AudioControlBar";
import TranscriptContainer from "./components/TranscriptContainer";
import { Box } from "@material-ui/core";

const Home = () => {
  return (
    <Box>
      <AudioControlBar />
      <TranscriptContainer />
    </Box>
  );
};
export default Home;
