import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import recordingFile from "../../../data/recording.wav";
import AudioPlayer from "../../../components/AudioPlayer";

const useStyles = makeStyles((theme) => ({
  headerWrapper: {
    background: "#EFF3F6",
    boxShadow: "none",
  },
}));

const AudioControlBar = (props) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.headerWrapper}>
      <Toolbar>
        <AudioPlayer recordingFile={recordingFile} {...props} />
      </Toolbar>
    </AppBar>
  );
};

AudioControlBar.prototype = {
  currentTime: PropTypes.number.isRequired,
  seekTime: PropTypes.number.isRequired,
  updateCurrentTime: PropTypes.func.isRequired,
  updateAudioDuration: PropTypes.func.isRequired,
  setSeekTime: PropTypes.func.isRequired,
  updateAudioPlayingStatus: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default AudioControlBar;
