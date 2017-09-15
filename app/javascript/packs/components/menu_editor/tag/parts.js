import React from 'react';
import PropTypes from 'prop-types';
import { tag } from './tag.sass';

const key = (type, id) => `tag-${type}_${id}`;

const Tag = ({ trainingId, parts }) => (
  <span
    key={key(trainingId, parts.id)}
    className={tag}
  >
    {parts.name}
  </span>
);

Tag.propTypes = {
  trainingId: PropTypes.number.isRequired,
  parts: PropTypes.object.isRequired,
};

export default Tag;
