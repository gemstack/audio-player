import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import recordingFile from "../../../assets/audios/recording.wav";
import AudioControls from "./AudioControls";
import { connect } from "react-redux";
import { togglePlayPause } from "../reducer";

class AudioControlBar extends React.Component {
  audioPlayerRef = React.createRef();

  togglePlayPause = () => {
    this.props.togglePlayPause();
    if (this.props.playing) {
      this.audioPlayerRef.pause();
    } else {
      this.audioPlayerRef.play();
    }
  };

  setAudioPlayerRef = (ref) => {
    this.audioPlayerRef = ref;
  };

  audioEnded = () => {
    this.props.togglePlayPause();
  }

  componentDidMount = () => {
    this.audioPlayerRef.onended = this.audioEnded;
  }

  render() {
    return (
      <AppBar color={"secondary"}>
        <Toolbar>
          <AudioControls
            playing={this.props.playing}
            recordingFile={recordingFile}
            onTogglePlayPause={this.togglePlayPause}
            setAudioPlayerRef={this.setAudioPlayerRef}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = (state) => ({
  playing: state.home.audioControlBar.playing,
});

const mapDispatchToProps = { togglePlayPause };

export default connect(mapStateToProps, mapDispatchToProps)(AudioControlBar);
