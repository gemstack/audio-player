import { makeStyles, Button } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";
import pauseButton from "../../assets/images/pause-circle-fill.svg";
import playButton from "../../assets/images/play-circle-fill.svg";
import share from "../../assets/images/share.png";
import rotateLeft from "../../assets/images/rotate-left.png";

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

  audioControlBlock: {
    display: "flex",
    width: "100px",
    justifyContent: "space-between",
    alignItems: "center",
  },

  speedFeild: {
    background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
    border: "1px solid #D0D9E2",
    borderRadius: "40px",
    width: "40px",
    color: "#556C86",
    textAlign: "center",
    padding: "3px 5px",
    marginLeft: "26px",
    fontWeight: "600",
    fontFamily: "Proxima Nova Rg",
  },
  audoMainSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerMainWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  shareBtn: {
    background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
    border: "1px solid #D0D9E2",
    borderRadius: "4px",
    boxShadow: "none",
    color: "#556C86",
    fontWeight: "600",
    fontFamily: "Proxima Nova Rg",
  },

  shareImg: {
    marginRight: "5px",
  },
});

const AudioPlayer = ({
  recordingFile,
  updateAudioPlayingStatus,
  isPlaying,
  seekTime,
  updateAudioDuration,
  updateCurrentTime,
  setSeekTime,
}) => {
  const classes = useStyles();
  const audioPlayerRef = useRef(null);

  useEffect(() => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.currentTime = seekTime;
    }
  }, [seekTime]);

  const changeOption = () => {
    updateAudioPlayingStatus(!isPlaying);
    if (isPlaying) {
      audioPlayerRef.current.pause();
    } else {
      audioPlayerRef.current.play();
    }
  };

  const goForward = () => {
    setSeekTime(audioPlayerRef.current.currentTime + 2);
  };

  const goBackward = () => {
    setSeekTime(audioPlayerRef.current.currentTime - 2);
  };

  const updateTime = (e) => {
    updateCurrentTime(e.target.currentTime);
  };

  const onLoadedData = (e) => {
    updateAudioDuration(e.target.duration);
  };


  return (
    <React.Fragment>
      <div className={classes.headerMainWrapper}>
        <div className={classes.audoMainSection}>
          <div className={classes.audioControlBlock}>
            <img onClick={goBackward} src={rotateLeft} alt="prev" />
            <img
              onClick={changeOption}
              className={classes.playPauseButton}
              src={isPlaying ? pauseButton : playButton}
              alt={isPlaying ? "Pause Button" : "Play Button"}
            />
            <img
              onClick={goForward}
              src={rotateLeft}
              alt="next"
              className={classes.nextButton}
            />
            <audio
              src={recordingFile}
              ref={audioPlayerRef}
              onTimeUpdate={updateTime}
              onLoadedData={onLoadedData}
              onEnded={() => updateAudioPlayingStatus(false)}
            />
          </div>
          <div className={classes.speedFeild}>1.0x</div>
        </div>
        <Button
          variant="contained"
          color="default"
          className={classes.shareBtn}
        >
          <img src={share} alt="next" className={classes.shareImg} />
          Share
        </Button>
      </div>
    </React.Fragment>
  );
};

AudioPlayer.propTypes = {
  seekTime: PropTypes.number.isRequired,
  updateCurrentTime: PropTypes.func.isRequired,
  updateAudioDuration: PropTypes.func.isRequired,
  recordingFile: PropTypes.string.isRequired,
  setSeekTime: PropTypes.func.isRequired,
  updateAudioPlayingStatus: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default AudioPlayer;
