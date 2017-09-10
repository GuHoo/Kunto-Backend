import _ from 'lodash'
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
  const isAuthenticated = !_.isEmpty(state.token);
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <AuthRoute
            isAuthenticated={isAuthenticated}
            isPrivate={false}
            to="/my"
            path="/login"
            component={Login}
          />
          <AuthRoute
            isAuthenticated={isAuthenticated}
            isPrivate={false}
            to="/my"
            path="/signup"
            component={Signup}
          />
          <AuthRoute
            isAuthenticated={isAuthenticated}
            isPrivate={true}
            to="/login"
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
