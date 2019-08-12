import React, { useRef, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import rotateLeft from '../../assets/images/rotate-left.png';
import playButton from '../../assets/images/play-circle-fill.png';
import pauseButton from '../../assets/images/pause-circle-fill.png';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  nextButton: {
    WebkitTransform: 'scaleX(-1)',
    transform: 'scaleX(-1)',
  },
  playPauseButton: {
    backgroundColor: 'white',
    borderRadius: '100%',
  },
});

const AudioPlayer = ({ recordingFile, updateAudioPlayingStatus, isPlaying, seekTime, updateAudioDuration, updateCurrentTime, setSeekTime }) => {
  
  const audioPlayerRef = useRef(null);

  useEffect(() => {
    if(audioPlayerRef.current) {
      audioPlayerRef.current.currentTime = seekTime;
    }
  }, [seekTime])

  const changeOption = () => {
    updateAudioPlayingStatus(!isPlaying);
    if (isPlaying) {
      audioPlayerRef.current.pause()
    } else {
      audioPlayerRef.current.play()
    }
  }

  const goForward = () => {
    setSeekTime(audioPlayerRef.current.currentTime + 2)
  }

  const goBackward = () => {
    setSeekTime(audioPlayerRef.current.currentTime - 2)
  }

  const updateTime = (e) => {
    updateCurrentTime(e.target.currentTime);
  }

  const onLoadedData = (e) => {
    updateAudioDuration(e.target.duration);
  }

  const classes = useStyles();
  
  return (
    <React.Fragment>
      <Button onClick={goBackward}>
        <img src={rotateLeft} alt="prev" />
      </Button>
      <Button onClick={changeOption}>
        <img
          className={classes.playPauseButton}
          src={isPlaying ? pauseButton : playButton}
          alt={isPlaying ? 'Pause Button' : 'Play Button'}
        />
      </Button>
      <Button onClick={goForward}>
        <img src={rotateLeft} alt="next" className={classes.nextButton} />
      </Button>
      <audio 
        src={recordingFile} 
        ref={audioPlayerRef} 
        onTimeUpdate={updateTime} 
        onLoadedData={onLoadedData}
        onEnded={() => updateAudioPlayingStatus(false)}
      />
    </React.Fragment>
  );
}

AudioPlayer.propTypes = {
  currentTime: PropTypes.number.isRequired,
  seekTime: PropTypes.number.isRequired,
  updateCurrentTime: PropTypes.func.isRequired,
  updateAudioDuration: PropTypes.func.isRequired,
  recordingFile: PropTypes.string.isRequired,
  setSeekTime: PropTypes.func.isRequired,
  updateAudioPlayingStatus: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default AudioPlayer;
