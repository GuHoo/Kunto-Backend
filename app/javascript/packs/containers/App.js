import { get, delay, isEmpty } from 'lodash'
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
import MenuEditor from '../components/menu_editor';
import AuthRoute from '../components/auth';
import NotFound from '../components/404';
import * as actions from '../actions';

const getToken = e => get(e, 'token');
const not = e => !e;
const waitAnimate = (func) => delay(func, 1000);

class App extends React.Component {
  componentDidMount() {
    actions.fetchStart() >> this.props.dispatch;
    const afterTask = () => actions.fetchEnd() >> this.props.dispatch;
    waitAnimate << afterTask;
  }

  render() {
    const { state } = this.props;
    const isAuthenticated = state >> getToken >> isEmpty >> not;
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/index" component={Dashboard} />
            <Route path="/dashboard" component={Dashboard} />
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
              to="/menus/new"
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
            <AuthRoute
              isAuthenticated={isAuthenticated}
              isPrivate={true}
              to="/sign_in"
              path="/menus/new"
              component={MenuEditor}
            />
            <Route component={Dashboard} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App >> connect(
  state => state.user
);
