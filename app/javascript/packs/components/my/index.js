import _ from 'lodash';
import React from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import { fetchTrainingRecord, fetchUserTrainingMenu } from '../../actions';

class My extends React.Component {
  componentDidMount() {
    const { user } = this.props;
    const payload = { token: user.state.token };
    _.defer(() => payload >> fetchUserTrainingMenu >> this.props.dispatch);
    _.delay(() => payload >> fetchTrainingRecord >> this.props.dispatch, 200);
  }

  render() {
    return (
      <div className="row">
        <div className="col s1 m1 l1" />
        <div className="col s10 m10 l10" />
        <div className="col s1 m1 l1" />
      </div>
    );
  }
}

export default My >> connect(
  state => ({ user: state.user, trainingRecords: state.trainingRecords }),
);
