import React from "react";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import recordingFile from "../../../assets/audios/recording.wav";
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

export default AudioControlBar;
