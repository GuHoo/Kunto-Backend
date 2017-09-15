import { get, delay, isEmpty } from 'lodash'
import React from 'react';
import { Switch, Router, Route, } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './Layout';
import Dashboard from '../components/dashboard';
import Login from '../components/login';
import Signup from '../components/signup';
import My from '../components/my';
import MenuEditor from '../components/menu_editor';
import AuthRoute from '../components/auth';
import NotFound from '../components/404';
import TrainSelector from '../components/train_selector';
import TrainRecoder from '../components/train_recorder';
import * as actions from '../actions';
import history from '../lib/history';

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
      <Router history={history}>
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
            <AuthRoute
              isAuthenticated={isAuthenticated}
              isPrivate={true}
              to="/sign_in"
              path="/trains/new"
              component={TrainSelector}
            />
            <AuthRoute
              isAuthenticated={isAuthenticated}
              isPrivate={true}
              to="/sign_in"
              path="/trains/:id"
              component={TrainRecoder}
            />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App >> connect(
  state => state.user
);
