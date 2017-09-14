import _ from 'lodash';
import R from 'ramda';
import React from 'react';
import autoBind from 'react-autobind';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUserTrainingMenu, fetchTraining } from '../../actions';

const weekDays = [ '月', '火', '水', '木', '金', '土', '日', ];
const key = (type, id) => `training-${type}_${id}`;

class TrainRecoder extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    return (
      <div className="container">
        <div className="row s1 m1 l1" />
        <div className="row s10 m10 l10" style={{ margin: '0 10px' }}>
          <h5>トレーニングの記録</h5>
        </div>
        <div className="row s1 m1 l1" />
      </div>
    );
  }
}

export default TrainRecoder >> connect(
  state => ({ user: state.user.state })
);
