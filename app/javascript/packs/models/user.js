import _ from 'lodash';

const invalidArguments = obj => {
  const id = _.get(obj, 'id', null);
  const email = _.get(obj, 'email', null);
  const token = _.get(obj, 'token', null);
  return _.isNil(id) || _.isNil(email) || _.isNil(token);
};

export default class User {
  constructor(obj) {
    if (invalidArguments(obj)) return;
    this._id = obj.id;
    this._email = obj.email;
    this._token = obj.token;
    this.store();
  }

  store() {
    const obj = {
      id: this._id,
      email: this._email,
      token: this._token,
    };
    localStorage.setItem('user', JSON.stringify(obj));
  }

  restore() {
    const anyJson = localStorage.getItem('user');
    if (!anyJson) return;
    const obj = JSON.parse(anyJson);
    this._id = _.get(obj, 'id', null);
    this._email = _.get(obj, 'email', null);
    this._token = _.get(obj, 'token', null);
    return this;
  }

  get id() {
    return this._id;
  }

  get email() {
    return this._email;
  }

  get token() {
    return this._token;
  }

  static currentUserToken() {
    const anyJson = localStorage.getItem('user');
    if (!anyJson) return null;
    const obj = JSON.parse(anyJson);
    return _.get(obj, 'token', null);
  }
}
