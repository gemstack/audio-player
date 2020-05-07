import PropTypes from "prop-types";

export const PROPTYPE_TRANSCRIPT_WORD_DETAILS = PropTypes.shape({
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  word: PropTypes.string,
});

export const PROPTYPE_TRANSCRIPT_WORD_TIMINGS = PropTypes.arrayOf(
  PropTypes.arrayOf(PROPTYPE_TRANSCRIPT_WORD_DETAILS)
);

export const PROPTYPE_TRANSCRIPT = PropTypes.arrayOf(
  PropTypes.shape({
    transcript_text: PropTypes.arrayOf(PropTypes.string),
    word_timings: PROPTYPE_TRANSCRIPT_WORD_TIMINGS,
  })
);
