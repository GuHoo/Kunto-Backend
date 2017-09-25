import R from "ramda";
import React from "react";
import PropTypes from "prop-types";

const weekDays = ["日", "月", "火", "水", "木", "金", "土"];
const key = (type, id) => `training-${type}_${id}`;

const renderWeekdayOptionCollection = () =>
  7 >>
  R.times(i => (
    <option key={key("wd", i)} value={i}>
      {weekDays[i]}
    </option>
  ));

const WeekdaySelector = ({ onChange, currentValue }) => (
  <div>
    <label>曜日</label>
    <select
      style={{ width: "80%", padding: "0" }}
      value={currentValue}
      className="browser-default"
      onChange={onChange}
    >
      <option value="-1" disabled selected>
        -
      </option>
      {renderWeekdayOptionCollection()}
    </select>
  </div>
);

WeekdaySelector.propTypes = {
  currentValue: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default WeekdaySelector;
