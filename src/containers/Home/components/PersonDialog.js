import React from "react";
import { makeStyles } from "@material-ui/core";
import { dialogSpeakers } from "./TranscriptContainer";

const useStyles = makeStyles((theme) => ({
  transcriptBlockPersonOne: {
    display: "flex",
    padding: "30px 30px 0px 30px",
  },
  transcriptBlockPersonTwo: {
    display: "flex",
    padding: "30px 30px 0px 30px",
    marginLeft: "60px",
  },
  transcriptSentenceContainer: {
    padding: "10px 10px 0",
  },
  transcriptSentence: {
    display: "inline",
  },
  startTimeContainer: {
    padding: "10px 10px 0",
  },
}));

const PersonDialog = ({ sentenceWords, dialogSpeaker }) => {
  const classes = useStyles();
  const transcriptBlock =
    dialogSpeaker === dialogSpeakers.PERSON_ONE
      ? classes.transcriptBlockPersonOne
      : classes.transcriptBlockPersonTwo;

  return (
    <div className={transcriptBlock}>
      <div className={classes.startTimeContainer}>
        {sentenceWords[0].startTime}
      </div>
      <div className={classes.transcriptSentenceContainer}>
        <p className={classes.transcriptSentence}>
          {sentenceWords.map((wordDetails) => {
            return <span>{wordDetails.word} </span>;
          })}
        </p>
      </div>
    </div>
  );
};

export default PersonDialog;
