import R from "ramda";
import React from "react";
import autoBind from "react-autobind";
import { connect } from "react-redux";
import M from "maybe-baby";
import Graph from "./graph";
import { fetchTraining, fetchTrainingRecord } from "../../actions";

const defer = (f, i) => setTimeout(() => f(i), 0);

class My extends React.Component {
  componentDidMount() {
    const { user } = this.props;
    const payload = { token: user.state.token };
    defer(() => (payload >> fetchTraining) >> this.props.dispatch);
    defer(() => (payload >> fetchTrainingRecord) >> this.props.dispatch);
  }

  get maybeRecords() {
    return M.of(this.props).props("records");
  }

  get maybeTrains() {
    return M.of(this.props).props("trains");
  }

  render() {
    if (this.maybeRecords.join() >> R.isEmpty) return null;
    if (this.maybeTrains.join() >> R.isEmpty) return null;
    return (
      <div className="row">
        <div className="col s1 m1 l1" />
        <div className="col s10 m10 l10">
          <Graph trains={this.props.trains} records={this.props.records} />
        </div>
        <div className="col s1 m1 l1" />
      </div>
    );
  }
}

export default My >>
  connect(state => ({
    user: state.user,
    records: state.trainingRecords.state,
    trains: state.training.state
  }));
