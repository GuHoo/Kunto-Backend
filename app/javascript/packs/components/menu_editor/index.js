import { isEmpty, times } from 'lodash';
import React from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import { fetchTraining } from '../../actions';

const weekDays = [ '月', '火', '水', '木', '金', '土', '日', ];

class MenuEditor extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  componentDidMount() {
    fetchTraining() >> this.props.dispatch;
  }

  renderTrainingCollection() {
    if (this.props.state >> isEmpty) return <h5>読み込み中</h5>;
    const key = (type, id) => `training-${type}_${id}`;
    const collection = this.props.state.map(training => (
      <li
        key={key('key', training.id)}
        className="collection-item"
        style={{
          height: '100px',
        }}
      >
        <div style={{ display: 'inline-block', width: '50%' }}>
          <input
            id={key('check', training.id)}
            className="filled-in"
            type="checkbox"
          />
          <label
            htmlFor={key('check', training.id)}>
            {training.name}
          </label>
        </div>
        <div style={{ display: 'inline-block', width: '50%' }}>
          <label>曜日を選択してください</label>
          <select className="browser-default">
            <option value="" disabled selected>未選択</option>
            {
              times(7, (i) => <option value={i}>{weekDays[i]}</option>)
            }
          </select>
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
