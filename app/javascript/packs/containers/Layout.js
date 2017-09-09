import React from 'react';
import RouteCSSTransitionGroup from './RouteCSSTransitionGroup';
import Nav from '../components/nav';

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <RouteCSSTransitionGroup
        component="div" transitionName="fade"
        transitionEnterTimeout={1000} transitionLeaveTimeout={400}
      >
        {children}
      </RouteCSSTransitionGroup>
    </div>
  );
}
