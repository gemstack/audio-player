import React from "react";
import { connect } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import { fade, InputBase, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  transcript: {
    marginTop: "100px",
  },
  parentTranscriptBlock: {
    display: "flex",
  },
  childTranscriptBlock: {
    display: "flex",
    padding: "20px 10px 0 0",
  },
  transcriptSentence: {
    display: "inline",
  },
  search: {
    position: "relative",
    border: "1px solid black",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const TranscriptContainer = ({ transcript }) => {
  const classes = useStyles();
  const personOneTranscripts = transcript.word_timings.filter(
    (value, index) => index % 2 === 0
  );
  const personTwoTranscripts = transcript.word_timings.filter(
    (value, index) => index % 2 !== 0
  );

  let transcriptSection = personOneTranscripts.map((personOneSentenceWords,index) => {
    const childSentenceWords = personTwoTranscripts.length > index ? personTwoTranscripts[index] : null;

    return (
      <div style={{ padding: "30px 30px 0px 30px" }}>
        <div className={classes.parentTranscriptBlock}>
          <div style={{ padding: "10px 10px 0" }}>
            {personOneSentenceWords[0].startTime}
          </div>
          <div style={{ padding: "10px 10px 0" }}>
            <p className={classes.transcriptSentence}>
              {personOneSentenceWords.map((wordDetails) => {
                return <span>{wordDetails.word} </span>;
              })}
            </p>
            {childSentenceWords && (
              <div className={classes.childTranscriptBlock}>
                <div>{childSentenceWords[0].startTime}</div>
                <div style={{ padding: "0px 10px 10px 20px" }}>
                  <p className={classes.transcriptSentence}>
                    {childSentenceWords.map((wordDetails) => {
                      return <span>{wordDetails.word} </span>;
                    })}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className={classes.transcript}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search call transcript"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      <div>{transcriptSection}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  transcript: state.home.transcript,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TranscriptContainer);
