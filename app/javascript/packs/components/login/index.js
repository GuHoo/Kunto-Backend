import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

export default class Login extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="row">
        <div className="row">
          <div className="col s1 m2" />
          <div className="col s10 m8">
            <div className="card" style={{ marginTop: '30px' }}>
              <div className="card-content">
                <span className="card-title">ログイン</span>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="email" type="email" className="validate" />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="input-field col s12">
                    <input id="email" type="password" className="validate" />
                    <label htmlFor="email">Password</label>
                  </div>
                </div>
              </div>
              <div className="card-action">
                <a href="#">ログインする</a>
              </div>
            </div>
          </div>
          <div className="col s1 m2" />
        </div>
        <div className="row">
          <div className="col s1 m2" />
          <div className="col s10 m8">
            <div className="card" style={{ marginTop: '30px' }}>
              <div className="card-content">
                アカウントがない方はこちらからユーザーを作成してください
              </div>
              <div className="card-action">
                <a href="#">ユーザーを作成する</a>
              </div>
            </div>
          </div>
          <div className="col s1 m2" />
        </div>
      </div>
    );
  }
}
