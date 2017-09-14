import { isEmpty } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Circular from '../circular';
import User from '../../models/user';

const not = e => !e;
const getToken = props => _.get(props, ['state', 'token']);

class Nav extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  render() {
    const isAuthenticated = this.props >> getToken >> isEmpty >> not;
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="row">
            <div className="col s12">
              <div className="nav-wrapper">
                <ul className="right">
                  <li>
                    {
                      (() => {
                        if (isAuthenticated) {
                          return (
                            <Link to="/trains/new">
                              <span className="fa fa-line-chart" />
                              記録する
                            </Link>
                          );
                        }
                        return <Link to="/sign_in">Log in</Link>;
                      })()
                    }
                  </li>
                  <li>
                    <Circular />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav >> connect(
  state => state.user,
);
