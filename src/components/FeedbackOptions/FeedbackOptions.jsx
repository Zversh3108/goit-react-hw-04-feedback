import React from 'react';
import { Button } from './FeedbackOptions.Styled';
import PropTypes from 'prop-types';
export default function FeedbackOptions(props) {
  return (
    <>
      {props.options.map((option, index) => (
        <Button key={index} type="button" onClick={props.onLeaveFeedback}>
          {option}
        </Button>
      ))}
    </>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
