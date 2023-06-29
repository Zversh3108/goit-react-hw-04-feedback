import React from 'react';
import { Container } from './Section.Styled';
import PropTypes from 'prop-types';
export function Section(props) {
  return (
    <Container>
      <h2>{props.title}</h2>
      {props.children}
    </Container>
  );
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
