import React from 'react';
import autoBind from 'react-autobind';
import Human from './Human';

export default function My() {
  return (
    <div className="row">
      <div className="col m1" />
      <div className="col s12 m5">
        <Human />
      </div>
      <div className="col s12 m5" />
      <div className="col m1" />
    </div>
  );
}
