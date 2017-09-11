import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import autoBind from 'react-autobind';
import * as actions from '../../actions';

class Signup extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
    };
    autoBind(this);
  }

  componentWillMount() {
    const token =_.get(this.props, ['state', 'token'], '');
    if (token !== '') this.props.history.push('/my');
  }

  onChangeEmail(e) {
    const email = e.target.value;
    this.setState({ email });
  }

  onChangePassword(e) {
    const password = e.target.value;
    this.setState({ password });
  }

  onChangePasswordConfirmation(e) {
    const passwordConfirmation = e.target.value;
    this.setState({ passwordConfirmation });
  }

  onSubmitUserInfo() {
    const {
      email,
      password,
      passwordConfirmation,
    } = this.state;
    this.props.dispatch(actions.trySignUp({ email, password, passwordConfirmation }));
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
                    <input
                      id="email"
                      type="email"
                      className="validate"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="input-field col s12">
                    <input
                      id="password"
                      type="password"
                      className="validate"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="input-field col s12">
                    <input
                      id="password_confirmation"
                      type="password"
                      className="validate"
                      value={this.state.passwordConfirmation}
                      onChange={this.onChangePasswordConfirmation}
                    />
                    <label htmlFor="password_confirmation">Password (再入力)</label>
                  </div>
                </div>
              </div>
              <div className="card-action">
                <a onClick={this.onSubmitUserInfo}> 登録する</a>
              </div>
            </div>
          </div>
          <div className="col s1 m2" />
        </div>
      </div>
    );
  }
}

export default connect(
  state => state.user
)(Signup);
