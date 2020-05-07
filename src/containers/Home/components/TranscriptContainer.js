import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { PROPTYPE_TRANSCRIPT } from "../../../constants";
import PersonDialog from "./PersonDialog";
import SearchBar from "./SearchBar";

const useStyles = makeStyles((theme) => ({
  transcript: {
    padding: "94px 15px 0",
  },
}));

export const dialogSpeakers = {
  PERSON_ONE: 0,
  PERSON_TWO: 1,
};

const TranscriptContainer = ({ transcript, currentTime, setSeekTime }) => {
  const classes = useStyles();
  const transcriptSection = transcript.word_timings.map(
    (sentenceWords, index) => (
      <PersonDialog
        key={index}
        sentenceWords={sentenceWords}
        setSeekTime={setSeekTime}
        currentTime={currentTime}
        dialogSpeaker={
          index % 2 === 0
            ? dialogSpeakers.PERSON_ONE
            : dialogSpeakers.PERSON_TWO
        }
      />
    )
  );

  return (
    <div className={classes.transcript}>
      <SearchBar />
      <div>{transcriptSection}</div>
    </div>
  );
};

TranscriptContainer.prototype = {
  transcript: PROPTYPE_TRANSCRIPT.isRequired,
  currentTime: PropTypes.number.isRequired,
  setSeekTime: PropTypes.func.isRequired,
};

export default TranscriptContainer;
