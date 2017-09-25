import _ from "lodash";

const invalidArguments = args => {
  const id = _.get(args, "id", null);
  const trainId = _.get(args, "train_id", null);
  const count = _.get(args, "count", null);
  const setNumber = _.get(args, "set_number", null);
  const trainDate = _.get(args, "train_date", null);
  return (
    _.isNil(id) ||
    _.isNil(trainId) ||
    _.isNil(count) ||
    _.isNil(setNumber) ||
    _.isNil(trainDate)
  );
};

export default class TrainRecord {
  constructor(args) {
    if (invalidArguments(args)) return null;
    this._id = args.id;
    this._trainId = args.train_id;
    this._count = args.count;
    this._setNumber = args.set_number;
    this._trainDate = args.train_date;
  }

  get id() {
    return this._id;
  }

  get trainId() {
    return this._trainId;
  }

  get count() {
    return this._count;
  }

  get setNumber() {
    return this._setNumber;
  }

  get trainDate() {
    return this._trainDate;
  }
}
