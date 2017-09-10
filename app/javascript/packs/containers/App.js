import { get,  } from 'lodash'
import React from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './Layout';
import Dashboard from '../components/dashboard';
import Login from '../components/login';
import Signup from '../components/signup';
import My from '../components/my';
import AuthRoute from '../components/auth';

function App({ state }) {
  const isAuthenticated = !_.flow([e => _.get(e, 'token'), _.isEmpty])(state);
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <AuthRoute
            isAuthenticated={isAuthenticated}
            isPrivate={false}
            to="/my"
            path="/sign_in"
            component={Login}
          />
          <AuthRoute
            isAuthenticated={isAuthenticated}
            isPrivate={false}
            to="/my"
            path="/sign_up"
            component={Signup}
          />
          <AuthRoute
            isAuthenticated={isAuthenticated}
            isPrivate={true}
            to="/sign_in"
            path="/my"
            component={My}
          />
          <Route component={Dashboard} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default connect(
  state => state.user
)(App);
