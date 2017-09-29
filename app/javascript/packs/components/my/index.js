import R from "ramda";
import React from "react";
import autoBind from "react-autobind";
import { connect } from "react-redux";
import M from "maybe-baby";
import Graph from "./graph";
import {
  fetchTraining,
  fetchTrainingRecord,
  fetchUserTrainingMenu
} from "../../actions";
import Train from "../../models/train";

const defer = (f, i) => setTimeout(() => f(i), 0);

class My extends React.Component {
  componentDidMount() {
    const { user } = this.props;
    const payload = { token: user.state.token };
    defer(() => (payload >> fetchTraining) >> this.props.dispatch);
    defer(() => (payload >> fetchTrainingRecord) >> this.props.dispatch);
    defer(() => (payload >> fetchUserTrainingMenu) >> this.props.dispatch);
  }

  get maybeRecords() {
    return M.of(this.props).props("records");
  }

  get maybeTrains() {
    return M.of(this.props).props("trains");
  }

  get maybeUserTrainMenu() {
    return M.of(this.props).props("userTrainMenu");
  }

  get isInvalidProps() {
    this.maybeRecords.join() >> R.isEmpty ||
      this.maybeTrains.join() >> R.isEmpty ||
      this.maybeUserTrainMenu.isNothing();
  }

  get todayTraining() {
    if (this.maybeUserTrainMenu.isNothing()) return null;
    const todayMenu = this.maybeUserTrainMenu.join().todayMenu;
    return todayMenu.map(menu => {
      const train = Train.findById(menu.train_id, this.maybeTrains.join());
      return (
        <p key={train.name + train.id + menu.id}>
          {train.name}を{menu.count}回、{menu.set_count}セット
        </p>
      );
    });
  }

  render() {
    if (this.isInvalidProps) return null;
    return (
      <div className="row">
        <div className="col s1 m1 l1" />
        <div className="col s10 m10 l10">
          <h5>本日のトレーニング</h5>
          {this.todayTraining}
          <h5>トレーニングの記録</h5>
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
    userTrainMenu: state.userTrainingMenu.state,
    trains: state.training.state
  }));
