import React from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from './Layout';
import Dashboard from '../components/dashboard';
import Login from '../components/login';

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route component={Dashboard} />
        </Switch>
      </Layout>
    </Router>
  );
}
