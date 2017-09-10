import React from 'react';
import autoBind from 'react-autobind';
import Human from './Human';

export default function My() {
  return (
    <div className="row">
      <div className="col s1 m1" />
      <div className="col s10 m10">
        <Human />
      </div>
      <div className="col s1 m1" />
    </div>
  );
}
