import React from "react";
import NProgress from "nprogress";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

class AuthRoute extends React.Component {
  componentWillMount() {
    NProgress.start();
  }

  componentDidMount() {
    NProgress.done();
    NProgress.remove();
  }

  render() {
    const { component, isAuthenticated, isPrivate, to, ...props } = this.props;
    if (isAuthenticated) {
      if (isPrivate) {
        return <Route {...props} component={component} />;
      } else {
        return <Redirect to={to} />;
      }
    } else {
      if (isPrivate) {
        return <Redirect to={to} />;
      } else {
        return <Route {...props} component={component} />;
      }
    }
  }
}

AuthRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isPrivate: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired
};

export default AuthRoute;
