import React from "react";
import PropTypes from "prop-types";
import rotateLeft from "../../../assets/images/rotate-left.png";
import { makeStyles } from "@material-ui/core";
import playButton from "../../../assets/images/play-circle-fill.png";
import pauseButton from "../../../assets/images/pause-circle-fill.png";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  nextButton: {
    WebkitTransform: "scaleX(-1)",
    transform: "scaleX(-1)",
  },
  playPauseButton: {
    backgroundColor: "white",
    borderRadius: "100%",
  },
});

const AudioControls = ({
  playing,
  recordingFile,
  setAudioPlayerRef,
  onTogglePlayPause,
}) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <img src={rotateLeft} alt="prev" />
      <div>
        <img
          onClick={onTogglePlayPause}
          className={classes.playPauseButton}
          src={playing ? pauseButton : playButton}
          alt={playing ? "Pause Button" : "Play Button"}
        />
      </div>
      <img src={rotateLeft} alt="next" className={classes.nextButton} />
      <audio src={recordingFile} ref={setAudioPlayerRef} />
    </React.Fragment>
  );
};

AudioControls.propTypes = {
  playing: PropTypes.bool.isRequired,
  recordingFile: PropTypes.string.isRequired,
  setAudioPlayerRef: PropTypes.func.isRequired,
  onTogglePlayPause: PropTypes.func.isRequired,
};

export default AudioControls;
