import { get } from 'lodash';
import R from 'ramda';
import React from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import { fetchTraining } from '../../actions';

const weekDays = [ '月', '火', '水', '木', '金', '土', '日', ];
const key = (type, id) => `training-${type}_${id}`;

class MenuEditor extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      weekDaysOfTraining: {},
      activeTraining: {}
    };
  }

  componentDidMount() {
    fetchTraining() >> this.props.dispatch;
  }

  onChangeTrainingState(e, training, checked) {
    const { activeTraining } = this.state;
    activeTraining[training.id] = checked >> R.not;
    this.setState({ activeTraining });
  }

  onChangeWeekDayOfTraining(e, training) {
    if (e.target.value == -1) return;
    const { weekDaysOfTraining } = this.state;
    weekDaysOfTraining[training.id] = e.target.value;
    this.setState({ weekDaysOfTraining });
  }

  renderCheckBoxOfTraining(training) {
    const { activeTraining } = this.state;
    const checked = get(activeTraining, training.id, false);
    return (
      <div>
        <input
          id={key('check', training.id)}
          type="checkbox"
          className="filled-in"
          checked={checked}
          onChange={(e) => this.onChangeTrainingState(e, training, checked)}
        />
        <label
          htmlFor={key('check', training.id)}>
          {training.name}
        </label>
      </div>
    );
  }

  renderWeekDayOfTrainingSelector(training) {
    const tryGetWeekDay = (o, id) => get(o, id, -1);
    const { weekDaysOfTraining } = this.state;
    const { activeTraining } = this.state;
    const isActive = activeTraining >> R.where({ [training.id]: k => k });
    if (isActive >> R.not) return;
    return (
      <div>
        <label>曜日を選択</label>
        <select
          value={tryGetWeekDay(weekDaysOfTraining, training.id)}
          className="browser-default"
          onChange={(e) => this.onChangeWeekDayOfTraining(e, training)}
        >
          <option value="-1" disabled selected>未選択</option>
          {
            7 >> R.times(i => (
              <option key={key('wd', i)} value={i}>
                {weekDays[i]}
              </option>
            ))
          }
        </select>
      </div>
    )
  }

  renderTrainingCollection() {
    if (this.props.state >> R.isEmpty) return <h5>読み込み中</h5>;
    const props = {
      className: 'collection-item',
      style: { height: '100px' },
    };
    const collection = this.props.state.map(training => (
      <li {...props} key={key('list', training.id)} >
        <div style={{ display: 'inline-block', width: '50%' }}>
          {this.renderCheckBoxOfTraining(training)}
        </div>
        <div style={{ display: 'inline-block', width: '25%' }}>
          {this.renderWeekDayOfTrainingSelector(training)}
        </div>
      </li>
    ));
    return (
      <ul className="collection">
        {collection}
      </ul>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="row s1 m1 l1" />
          <div className="row s10 m10 l10" style={{ margin: '0 10px' }}>
            {this.renderTrainingCollection()}
          </div>
          <div className="row s1 m1 l1" />
        </div>
      </div>
    );
  }
}

export default MenuEditor >> connect(
  state => state.training,
);
