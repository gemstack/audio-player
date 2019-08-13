import { makeStyles } from "@material-ui/core";
import React from "react";
import PersonDialog from "./PersonDialog";
import SearchBar from "./SearchBar";

const useStyles = makeStyles((theme) => ({
  transcript: {
    marginTop: "100px",
  },
}));

export const dialogSpeakers = {
  PERSON_ONE: 0,
  PERSON_TWO: 1,
};

const TranscriptContainer = ({ transcript }) => {
  const classes = useStyles();
  const transcriptSection = transcript.word_timings.map(
    (sentenceWords, index) => (
      <PersonDialog
        sentenceWords={sentenceWords}
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

export default TranscriptContainer;
