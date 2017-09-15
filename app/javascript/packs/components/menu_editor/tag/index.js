import React from 'react';
import PropTypes from 'prop-types';
import Parts from './parts';

const key = (type, id) => `taglist-${type}_${id}`;

const TagList = ({ training }) => {
  const list = training.parts.map(p => (
    <Parts
      key={key(training.id, p.id)}
      trainingId={training.id}
      parts={p}
    />
  ));
  return <div>{list}</div>;
};

TagList.propTypes = {
  training: PropTypes.object.isRequired,
};

export default TagList;
