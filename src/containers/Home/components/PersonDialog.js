import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { dialogSpeakers } from "./TranscriptContainer";
import Word from "./Word";

const useStyles = makeStyles((theme) => ({
  transcriptBlockPersonOne: {
    display: "flex",
    padding: "30px 0px 0px",
    alignItems: "center",
  },

  transcriptBlockPersonTwo: {
    display: "flex",
    padding: "30px 30px 0px 30px",
    marginLeft: "60px",
    alignItems: "center",
  },

  transcriptSentenceContainer: {
    padding: "10px 10px 0",
  },

  transcriptSentence: {
    display: "inline",
    color: "#556C86",
  },

  startTimeContainer: {
    padding: "10px 10px 0",
    color: "#1A99F6",
  },

  startTimeContainerPersonOne: {
    color: "#1A99F6",
    padding: "0 10px 0 ",
    fontWeight: "600",
    fontFamily: "Proxima Nova Rg",
  },

  startTimeContainerPersonTwo: {
    color: "#8868E9",
    padding: "0 10px 0 ",
    fontWeight: "600",
    fontFamily: "Proxima Nova Rg",
  },

  transcriptSentenceContainerPersonOne: {
    borderLeft: "2px rgba(13,119,198,.25) solid",
    padding: "0 10px",
    fontFamily: "Proxima Nova Rg",
    fontWeight: "normal",
  },

  transcriptSentenceContainerPersonTwo: {
    borderLeft: "2px rgba(136,104,233,.25) solid",
    padding: "0 10px",
    fontFamily: "Proxima Nova Rg",
    fontWeight: "normal",
  },
}));

const PersonDialog = ({
  sentenceWords,
  dialogSpeaker,
  currentTime,
  setSeekTime,
}) => {
  const classes = useStyles();
  let transcriptBlock = classes.transcriptBlockPersonOne;
  let startTimeContainer = classes.startTimeContainerPersonOne;
  let transcriptSentenceContainer =
    classes.transcriptSentenceContainerPersonOne;

  if (dialogSpeaker === dialogSpeakers.PERSON_TWO) {
    transcriptBlock = classes.transcriptBlockPersonTwo;
    startTimeContainer = classes.startTimeContainerPersonTwo;
    transcriptSentenceContainer = classes.transcriptSentenceContainerPersonTwo;
  }

  const onWordClicked = (wordStartTime) => {
    setSeekTime(wordStartTime);
  };

  const sentence = sentenceWords.map((wordDetails, index) => {
    return (
      <Word
        key={index}
        wordDetails={wordDetails}
        onWordClicked={onWordClicked}
        currentTime={currentTime}
      />
    );
  });

  return (
    <div className={transcriptBlock}>
      <div className={startTimeContainer}>{sentenceWords[0].startTime}</div>
      <div className={transcriptSentenceContainer}>
        <p className={classes.transcriptSentence}>{sentence}</p>
      </div>
    </div>
  );
};

PersonDialog.prototype = {
  sentenceWords: PropTypes.arrayOf(PropTypes.string).isRequired,
  dialogSpeaker: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
  setSeekTime: PropTypes.func.isRequired,
};

export default PersonDialog;
