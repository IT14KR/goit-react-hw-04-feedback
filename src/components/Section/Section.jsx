import React from 'react';
import PropTypes from 'prop-types';
import { SectionTitel, SectionWrap } from './Section.styled';

export const Section = ({ titel, children }) => {
  return (
    <SectionWrap>
      <SectionTitel>{titel}</SectionTitel>
      {children}
    </SectionWrap>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
