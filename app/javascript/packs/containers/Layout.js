import React from 'react';
import RouteCSSTransitionGroup from './RouteCSSTransitionGroup';

export default function Layout({ children }) {
  return (
    <div>
      <RouteCSSTransitionGroup
        component="div" transitionName="routing"
        transitionEnterTimeout={1000} transitionLeaveTimeout={400}
      >
        {children}
      </RouteCSSTransitionGroup>
    </div>
  );
}
