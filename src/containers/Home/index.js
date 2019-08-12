import React from 'react';
import AudioControlBar from './components/AudioControlBar';
import TranscriptContainer from './components/TranscriptContainer';
import { Box } from '@material-ui/core';
import { connect } from 'react-redux';
import { updateCurrentTime, updateAudioDuration, setSeekTime, updateAudioPlayingStatus } from './reducer';

const Home = (props) => {
  return (
    <Box>
      <AudioControlBar {...props} />
      <TranscriptContainer />
    </Box>
  );
};


const mapStateToProps = state => ({
  currentTime: state.audio.currentTime,
  seekTime: state.audio.seekTime,
  isPlaying: state.audio.isPlaying,
});

const mapDispatchToProps = { updateCurrentTime, updateAudioDuration, setSeekTime, updateAudioPlayingStatus };

export default connect(mapStateToProps, mapDispatchToProps)(Home);

