import R from "ramda";
import React, { Component } from "react";
import autoBind from "react-autobind";
import C3Chart from "react-c3js";
import M from "maybe-baby";
import Train from "../../../models/train";
import Tooltip from "rc-tooltip";
import Slider from "rc-slider";

const Handle = Slider.Handle;

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

export default class Glaph extends Component {
  constructor(props) {
    super(props);
    this.state = { dataNum: 10 };
    autoBind(this);
  }

  get maybeRecords() {
    return M.of(this.props).props("records");
  }

  get maybeTrains() {
    return M.of(this.props).props("trains");
  }

  get maxDataNum() {
    const groupBy = R.groupBy(record => record.trainId);
    const lengthList = [];
    const getCountEach = R.forEachObjIndexed((recordList, _) =>
      lengthList.push(recordList.length)
    );
    (this.maybeRecords.join() >> groupBy) >> getCountEach;
    const count = (lengthList >> R.sort((a, b) => a - b)) >> R.last;
    return count > 100 ? 100 : count;
  }

  get line() {
    const map = R.map(record => record.attributes);
    const groupBy = R.groupBy(record => record.trainId);
    const result = {};
    const take = R.take(this.state.dataNum);
    const getCountEach = R.forEachObjIndexed((recordList, key) => {
      const name = Train.findById(key, this.maybeTrains.join()).name;
      result[name] = (recordList >> R.map(record => record.count)) >> take;
    });
    ((this.maybeRecords.join() >> map) >> groupBy) >> getCountEach;
    return result;
  }

  onChangeDataNum(dataNum) {
    this.setState({ dataNum });
  }

  render() {
    return (
      <div>
        <C3Chart data={{ json: this.line }} />
        <Slider
          min={10}
          max={this.maxDataNum}
          defaultValue={this.state.dataNum}
          onChange={this.onChangeDataNum}
          handle={handle}
        />
      </div>
    );
  }
}
