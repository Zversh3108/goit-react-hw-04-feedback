import React from 'react';
import { List } from './Statistics.Styled';
import PropTypes from 'prop-types';
export default function Statistics(props) {
  const { good, neutral, bad, total } = props;
  return (
    <div>
      <List>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total:{total}</li>
        <li>Positive feedback: {total > 0 ? props.positivePercentage : 0}%</li>
      </List>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
