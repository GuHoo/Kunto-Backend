import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import autoBind from "react-autobind";
import { trySignIn } from "../../actions";

class Login extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      email: "",
      password: ""
    };
    autoBind(this);
  }

  onSubmit() {
    (this.state >> trySignIn) >> this.props.dispatch;
  }

  onChangeEmail(e) {
    const email = e.target.value;
    this.setState({ email });
  }

  onChangePassword(e) {
    const password = e.target.value;
    this.setState({ password });
  }

  render() {
    return (
      <div className="row">
        <div className="row">
          <div className="col s1 m2" />
          <div className="col s10 m8">
            <div className="card" style={{ marginTop: "30px" }}>
              <div className="card-content">
                <span className="card-title">ログイン</span>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      value={this.state.email}
                      id="email"
                      type="email"
                      className="validate"
                      onChange={this.onChangeEmail}
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="input-field col s12">
                    <input
                      value={this.state.password}
                      id="password"
                      type="password"
                      className="validate"
                      onChange={this.onChangePassword}
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                </div>
              </div>
              <div className="card-action">
                <a onClick={this.onSubmit}>ログインする</a>
              </div>
            </div>
          </div>
          <div className="col s1 m2" />
        </div>
        <div className="row">
          <div className="col s1 m2" />
          <div className="col s10 m8">
            <div className="card" style={{ marginTop: "30px" }}>
              <div className="card-content">アカウントがない方はこちらからユーザーを作成してください</div>
              <div className="card-action">
                <Link to="/sign_up">ユーザーを作成する</Link>
              </div>
            </div>
          </div>
          <div className="col s1 m2" />
        </div>
      </div>
    );
  }
}

export default Login >> connect(state => state.user);
