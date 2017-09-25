import React from "react";
import PropTypes from "prop-types";

const TrainingCheckbox = ({ id, checked, onChange }) => (
  <input
    id={id}
    type="checkbox"
    className="filled-in"
    checked={checked}
    onChange={onChange}
  />
);

TrainingCheckbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  checked: PropTypes.any.isRequired
};

export default TrainingCheckbox;
