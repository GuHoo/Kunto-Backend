import _ from 'lodash';

const invalidArguments = args => {
  const id = _.get(args, 'id', null);
  const name = _.get(args, 'name', null);
  const detail = _.get(args, 'detail', null);
  const parts = _.get(args, 'parts', null);
  return _.isNil(id) || _.isNil(name) || _.isNil(detail) || _.isNil(parts);
};

export default class Train {
  constructor(args) {
    if (invalidArguments(args)) return null;
    this._id = args.id;
    this._name = args.name;
    this._detail = args.detail;
    this._parts = args.parts;
  }

  static findById(id, collection) {
    const scope = t => t.id === id;
    if (collection == null) return c => c.find(scope);
    return collection.find(scope);
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

  get parts() {
    return this._parts;
  }
}
