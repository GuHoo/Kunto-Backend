import React from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import { fetchTrainingRecord } from '../../actions';

class My extends React.Component  {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { user } = this.props;
    this.props.dispatch(fetchTrainingRecord({ token: user.state.token }));
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

export default connect(
  state => ({ user: state.user, trainingRecords: state.trainingRecords }),
)(My);
