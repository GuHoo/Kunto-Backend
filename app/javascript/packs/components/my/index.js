import React from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import { fetchTrainingRecord } from '../../actions';

class My extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { user } = this.props;
    const payload = { token: user.state.token };
    payload
      >> fetchTrainingRecord
      >> this.props.dispatch;
  }

  render() {
    return (
      <div className="row">
        <div className="col s1 m1" />
        <div className="col s10 m10" />
        <div className="col s1 m1" />
      </div>
    );
  }
}

export default My >> connect(
  state => ({ user: state.user, trainingRecords: state.trainingRecords }),
);
