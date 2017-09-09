export default class User {
  constructor({ id, email, token }) {
    this._id = id;
    this._email = email;
    this._token = token;

    localStorage.setItem('token', token);
  }

  get id() {
    return this._id;
  }

  get email() {
    return this.email;
  }

  get token() {
    return this.token;
  }

  static currentUserToken() {
    return localStorage.getItem('token');
  }
}

