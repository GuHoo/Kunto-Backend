import React from "react";
import PropTypes from "prop-types";
import ReactCSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import StaticContainer from "react-static-container";

const getPathname = router => router.route.location.pathname;

export default class RouteCSSTransituionGroup extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      previousPathname: null
    };
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const nextPathname = getPathname(nextContext.router);
    const currentPathname = getPathname(this.context.router);
    if (nextPathname !== currentPathname) {
      this.setState({ previousPathname: currentPathname });
    }
  }

  componentDidUpdate() {
    if (this.state.previousPathname) {
      this.setState({ previousPathname: null });
    }
  }

  render() {
    const { children, ...props } = this.props;
    const { previousPathname } = this.state;
    const currentPathname = getPathname(this.context.router);
    return (
      <ReactCSSTransitionGroup {...props}>
        <StaticContainer
          key={previousPathname || currentPathname}
          shouldUpdate={!previousPathname}
        >
          {children}
        </StaticContainer>
      </ReactCSSTransitionGroup>
    );
  }
}
