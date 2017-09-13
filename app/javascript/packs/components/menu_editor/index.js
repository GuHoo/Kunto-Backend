import { get, map } from 'lodash';
import R from 'ramda';
import React from 'react';
import autoBind from 'react-autobind';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { fetchTraining, tryPostTrainingMenuAction } from '../../actions';

const weekDays = [ '月', '火', '水', '木', '金', '土', '日', ];
const key = (type, id) => `training-${type}_${id}`;

class MenuEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weekDaysOfTraining: {},
      activeTraining: {},
      trainingCount: {},
      trainingSetCount: {},
      name: '',
    };
    autoBind(this);
  }

  componentDidMount() {
    fetchTraining() >> this.props.dispatch;
  }

  onSubmit() {
    const trains = map(this.state.activeTraining, (_, k) => ({
      train_id: k,
      count: this.state.trainingCount[k],
      set_count: this.state.trainingSetCount[k],
      train_week_day: this.state.weekDaysOfTraining[k]
    }));
    const payload = {
      token: this.props.user.state.token,
      menu: {
        name: this.state.name,
        menu_trains: trains,
      }
    };
    payload >> tryPostTrainingMenuAction >> this.props.dispatch;
  }

  onChangeName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeTrainingState(e, training, checked) {
    const { activeTraining } = this.state;
    activeTraining[training.id] = checked >> R.not;
    this.setState({ activeTraining });
  }

  onChangeWeekDayOfTraining(e, training) {
    if (e.target.value == -1) return;
    const { weekDaysOfTraining } = this.state;
    weekDaysOfTraining[training.id] = parseInt(e.target.value, 10);
    this.setState({ weekDaysOfTraining });
  }

  onChangeTrainingCount(e, training) {
    const { trainingCount } = this.state;
    trainingCount[training.id] = parseInt(e.target.value, 10);
    this.setState({ trainingCount });
  }

  onChangeTrainingSetCount(e, training) {
    const { trainingSetCount } = this.state;
    trainingSetCount[training.id] = parseInt(e.target.value, 10);
    this.setState({ trainingSetCount });
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
        <label>曜日</label>
        <select
          style={{ width: '80%', padding: '0' }}
          value={tryGetWeekDay(weekDaysOfTraining, training.id)}
          className="browser-default"
          onChange={(e) => this.onChangeWeekDayOfTraining(e, training)}
        >
          <option value="-1" disabled selected>-</option>
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

  renderInputBoxOfTrainingSetCount(training) {
    const { trainingSetCount, activeTraining } = this.state;
    const isActive = activeTraining >> R.where({ [training.id]: k => k });
    const getCount = o => get(o, training.id, '');
    if (isActive >> R.not) return;
    return (
      <div>
        <div className="input-field">
          <input
            id={`setcount-${training.id}`}
            type="number"
            value={getCount(trainingSetCount)}
            onChange={e => this.onChangeTrainingSetCount(e, training)}
          />
          <label
            htmlFor={`setcount-${training.id}`}
            style={{ fontSize: '12px' }}>セット数</label>
        </div>
      </div>
    )
  }

  renderInputBoxOfTrainingCount(training) {
    const { trainingCount, activeTraining } = this.state;
    const isActive = activeTraining >> R.where({ [training.id]: k => k });
    const getCount = o => get(o, training.id, '');
    if (isActive >> R.not) return;
    return (
      <div>
        <div className="input-field">
          <input
            id={`count-${training.id}`}
            type="number"
            value={getCount(trainingCount)}
            onChange={e => this.onChangeTrainingCount(e, training)}
          />
          <label
            htmlFor={`count-${training.id}`}
            style={{ fontSize: '12px' }}>回数</label>
        </div>
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
        <div style={{ display: 'inline-block', width: '50%', marginTop: '30px' }}>
          {this.renderCheckBoxOfTraining(training)}
        </div>
        <div style={{ display: 'inline-block', width: '15%' }}>
          {this.renderWeekDayOfTrainingSelector(training)}
        </div>
        <div style={{ display: 'inline-block', width: '17%' }}>
          {this.renderInputBoxOfTrainingSetCount(training)}
        </div>
        <div style={{ display: 'inline-block', width: '1%' }} />
        <div style={{ display: 'inline-block', width: '17%' }}>
          {this.renderInputBoxOfTrainingCount(training)}
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
    const disabled = this.props.state >> R.isEmpty;
    const button = classNames('waves-effect', 'waves-light', 'btn', disabled ? 'disabled' : '');
    return (
      <div className="container">
        <div className="row">
          <div className="row s1 m1 l1" />
          <div className="row s10 m10 l10" style={{ margin: '0 10px' }}>
            <h5>トレーニングメニューの作成</h5>
            <div className="input-field">
              <input
                type="text"
                id="name"
                value={this.state.name}
                onChange={this.onChangeName}
              />
              <label htmlFor="name">メニュー名</label>
            </div>
            {this.renderTrainingCollection()}
            <button
              className={button}
              onClick={this.onSubmit}
            >
              登録する
            </button>
          </div>
          <div className="row s1 m1 l1" />
        </div>
      </div>
    );
  }
}

export default MenuEditor >> connect(
  state => ({ state: state.training.state, user: state.user}),
);
