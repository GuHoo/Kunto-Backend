import _ from 'lodash';
import R from 'ramda';
import React from 'react';
import autoBind from 'react-autobind';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUserTrainingMenu, fetchTraining } from '../../actions';

const weekDays = [ '月', '火', '水', '木', '金', '土', '日', ];
const key = (type, id) => `training-${type}_${id}`;

class TrainSelector extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  componentDidMount() {
    const payload = { token: _.get(this.props, ['user', 'state', 'token'], '') };
    payload >> fetchUserTrainingMenu >> this.props.dispatch;
    fetchTraining() >> this.props.dispatch;
  }

  renderTrainingCollection() {
    const props = {
      className: 'collection-item',
      style: { height: '60px' },
    };
    const collection = this.props.state.trains.map(t => (
      <li { ...props } key={key('list', t.id)}>
        <span style={{ display: 'inline-block',  marginTop: '8px' }}>{t.name}</span>
        <Link
          to={`/trains/${t.id}`}
          className="waves-effect waves-light btn"
          style={{ float: 'right', color: 'white' }}>
          開始
        </Link>
      </li>
    ));
    return (
      <ul className="collection">
        {collection}
      </ul>
    )
  }

  render() {
    if (this.props.state == null || this.props.training == []) return null;
    return (
      <div className="container">
        <div className="row">
          <div className="row s1 m1 l1" />
          <div className="row s10 m10 l10" style={{ margin: '0 10px' }}>
            <h7>これから始めるトレーニングを選択してください</h7>
            {this.renderTrainingCollection()}
          </div>
          <div className="row s1 m1 l1" />
        </div>
      </div>
    );
  }
}

export default TrainSelector >> connect(
  state => ({
    user: state.user,
    state: state.userTrainingMenu.state
  })
);
