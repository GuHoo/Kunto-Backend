import _ from 'lodash';

const invalidArguments = args => {
  const id = _.get(args, 'id', null);
  const email = _.get(args, 'name', null);
  const token = _.get(args, 'detail', null);
  return _.isNil(id) || _.isNil(email) || _.isNil(token);
};

export default class Train {
  constructor(args) {
    if (invalidArguments(args)) return null;
    this._id = args.id;
    this._name = args.name;
    this._detail = args.detail;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get detail() {
    return this._detail;
  }
}
