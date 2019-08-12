import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import recordingFile from "../../../assets/audios/recording.wav";
import AudioPlayer from "../../../components/AudioPlayer";

const AudioControlBar = (props) => {
  return (
    <AppBar>
      <Toolbar>
        <AudioPlayer
          recordingFile={recordingFile}
          {...props}
        />
      </Toolbar>
    </AppBar>
  );
}

export default AudioControlBar;
