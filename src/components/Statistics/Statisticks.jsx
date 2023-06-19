import React, { useState } from 'react';
import { List } from './Statistics.Styled';
import PropTypes, { func } from 'prop-types';
export default function Statistics(props) {
  return (
    <div>
      <List>
        <li>Good: {props.good}</li>
        <li>Neutral: {props.neutral}</li>
        <li>Bad: {props.bad}</li>
        <li>Total:{props.total}</li>
        <li>
          Positive feedback: {props.total > 0 ? props.positivePercentage : 0}%
        </li>
      </List>
    </div>
  );
}
