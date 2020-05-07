import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { PROPTYPE_TRANSCRIPT_WORD_DETAILS } from "../../../constants";

const useStyles = makeStyles((theme) => ({
  sentenceWord: {
    "&:hover": {
      borderRadius: "2px",
      background: "rgba(26, 153, 246, 0.25)",
    },
  },

  hightlightField: {
    background: "rgba(26, 153, 246, 0.25)",
    borderRadius: "2px",
    "&:hover": {
      background: "rgba(26, 153, 246, 0.25)",
    },
  },
}));

const Word = ({ wordDetails, onWordClicked, currentTime }) => {
  const classes = useStyles();
  const wordStartTime = parseFloat(wordDetails.startTime);
  const wordEndTime = parseFloat(wordDetails.endTime);

  const wordClass =
    currentTime >= wordStartTime && currentTime <= wordEndTime
      ? classes.hightlightField
      : classes.sentenceWord;

  return (
    <React.Fragment>
      <span className={wordClass} onClick={() => onWordClicked(wordStartTime)}>
        {wordDetails.word}
      </span>{" "}
    </React.Fragment>
  );
};

Word.prototype = {
  wordDetails: PROPTYPE_TRANSCRIPT_WORD_DETAILS.isRequired,
  onWordClicked: PropTypes.func.isRequired,
  currentTime: PropTypes.number.isRequired,
};

export default Word;
