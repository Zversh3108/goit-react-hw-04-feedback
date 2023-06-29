import React from 'react';
import PropTypes from 'prop-types';
export default function Notification(props) {
  return <p>{props.message}</p>;
}
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
