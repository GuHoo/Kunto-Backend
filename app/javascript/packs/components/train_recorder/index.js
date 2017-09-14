import _ from 'lodash';
import R from 'ramda';
import React from 'react';
import autoBind from 'react-autobind';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { tryPostTrainingRecord } from '../../actions';

const weekDays = [ '月', '火', '水', '木', '金', '土', '日', ];
const key = (type, id) => `training-${type}_${id}`;
const tryParseInt = (val) => {
  try {
    return parseInt(val, 10);
  } catch (_err) {
    return 0;
  }
};

class TrainRecoder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    autoBind(this);
  }

  onSubmit() {
    this.setState({ count: 0 });
    const payload = {
      token: this.props.user.token,
      train_id: this.props.match.params.id,
      train_date: moment().toISOString(),
      count: this.state.count,
    };
    payload >> tryPostTrainingRecord >> this.props.dispatch;
  }

  onChangeCountByInput(e) {
    const count = e.target.value >> tryParseInt;
    this.setState({ count });
  }

  onChangeCount() {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  render() {
    return (
      <div className="container">
        <div className="row s1 m1 l1" />
        <div className="row s10 m10 l10" style={{ margin: '0 10px' }}>
          <h5>トレーニングの記録</h5>
          <div style={{ textAlign: 'center' }}>
            <div className="input-field">
              <input
                id={key('input', this.props.match.params.id)}
                type="number"
                placeholder="回数"
                style={{ textAlign: 'right', fontSize: '3em' }}
                value={this.state.count}
                onChange={this.onChangeCountByInput}
              />
            </div>
            <div className="col s6 m6 l6">
              <button
                className="btn-floating btn-large waves-effect waves-light green"
                style={{ width: '140px', height: '140px', fontSize: '1.5em' }}
                onClick={this.onChangeCount}
              >
                カウント
              </button>
            </div>
            <div className="col s6 m6 l6">
              <button
                className="btn-floating btn-large waves-effect waves-light red"
                style={{ width: '140px', height: '140px', fontSize: '1.5em' }}
                onClick={this.onSubmit}
              >
                記録
              </button>
            </div>
          </div>
        </div>
        <div className="row s1 m1 l1" />
      </div>
    );
  }
}

export default TrainRecoder >> connect(
  state => ({ user: state.user.state })
);
