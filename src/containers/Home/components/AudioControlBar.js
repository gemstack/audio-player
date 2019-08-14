import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import recordingFile from "../../../assets/audios/recording.wav";
import AudioControls from "./AudioControls";

class AudioControlBar extends React.Component {
  state = {
    playing: false,
  };
  audioPlayerRef = React.createRef();

  play = () => {
    this.setState((prevState) => ({ ...prevState, playing: true }));
    this.audioPlayerRef.play();
  };

  pause = () => {
    this.setState((prevState) => ({ ...prevState, playing: false }));
    this.audioPlayerRef.pause();
  };

  togglePlayPause = () => {
    if (this.state.playing) {
      this.pause();
    } else {
      this.play();
    }
  };

  setAudioPlayerRef = (ref) => {
    this.audioPlayerRef = ref;
  };

  render() {
    return (
      <AppBar color={"secondary"}>
        <Toolbar>
          <AudioControls
            playing={this.state.playing}
            recordingFile={recordingFile}
            onTogglePlayPause={this.togglePlayPause}
            setAudioPlayerRef={this.setAudioPlayerRef}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

export default AudioControlBar;
