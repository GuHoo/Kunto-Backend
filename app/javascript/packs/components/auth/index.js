import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const AuthRoute = ({ component, isAuthenticated, isPrivate, to,  ...props }) => {
  if (isAuthenticated) {
    if (isPrivate) {
      return <Route {...props} component={component} />;
    } else {
      return <Redirect to={to} />
    }
  } else {
    if (isPrivate) {
      return <Redirect to={to} />
    } else {
      return <Route {...props} component={component} />;
    }
  }
};

AuthRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func
  ]).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isPrivate: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
};

export default AuthRoute;
