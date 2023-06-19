import React, { useState } from 'react';
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
