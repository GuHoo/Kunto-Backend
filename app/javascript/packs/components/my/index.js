import React from 'react';
import autoBind from 'react-autobind';

export default class My extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    autoBind(this);
  }

  render() {
    return (
      <div>
        hoge
      </div>
    );
  }
}
