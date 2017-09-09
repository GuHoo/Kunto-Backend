import React from 'react';
import PropTypes from 'prop-types';

export default class Signup extends React.Component {
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
                <span className="card-title">ユーザー登録</span>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="email" type="email" className="validate" />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="input-field col s12">
                    <input id="password" type="password" className="validate" />
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="input-field col s12">
                    <input id="password_confirmation" type="password" className="validate" />
                    <label htmlFor="password_confirmation">Password (再入力)</label>
                  </div>
                </div>
              </div>
              <div className="card-action">
                <a href="#">登録する</a>
              </div>
            </div>
          </div>
          <div className="col s1 m2" />
        </div>
      </div>
    );
  }
}
