import { Box } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { PROPTYPE_TRANSCRIPT } from "../../constants";
import AudioControlBar from "./components/AudioControlBar";
import TranscriptContainer from "./components/TranscriptContainer";
import {
  setSeekTime,
  updateAudioDuration,
  updateAudioPlayingStatus,
  updateCurrentTime,
} from "./reducer";

const Home = ({ transcript, currentTime, setSeekTime, ...props }) => {
  return (
    <Box>
      <AudioControlBar
        setSeekTime={setSeekTime}
        {...props}
      />
      <TranscriptContainer
        transcript={transcript}
        currentTime={currentTime}
        setSeekTime={setSeekTime}
      />
    </Box>
  );
};

Home.prototype = {
  transcript: PROPTYPE_TRANSCRIPT.isRequired,
  currentTime: PropTypes.number.isRequired,
  setSeekTime: PropTypes.func.isRequired,
  seekTime: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  updateCurrentTime: PropTypes.func.isRequired,
  updateAudioDuration: PropTypes.func.isRequired,
  updateAudioPlayingStatus: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentTime: state.audio.currentTime,
  seekTime: state.audio.seekTime,
  isPlaying: state.audio.isPlaying,
  transcript: state.audio.transcript,
});

const mapDispatchToProps = {
  updateCurrentTime,
  updateAudioDuration,
  setSeekTime,
  updateAudioPlayingStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
