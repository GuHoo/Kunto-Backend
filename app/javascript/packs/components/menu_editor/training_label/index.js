import React from 'react';
import PropTypes from 'prop-types';
import { label } from './label.sass'

const TrainingLabel = ({ name, htmlFor }) => (
  <label htmlFor={htmlFor} className={label} >
    {name}
  </label>
);

TrainingLabel.propTypes = {
  name: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
};

export default TrainingLabel;
