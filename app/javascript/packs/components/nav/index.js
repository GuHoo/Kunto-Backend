import { isEmpty } from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Circular from '../circular';
import User from '../../models/user';

export default class Nav extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const isAuthenticated = !isEmpty(User.currentUserToken());
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
                            <Link to="#">
                              <span className="fa fa-line-chart" />
                              トレーニングを記録する
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
