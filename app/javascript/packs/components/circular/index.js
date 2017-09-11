import React from 'react';
import { connect } from 'react-redux';
import styles from './Circular.sass';
import classNames from 'classnames';

class Circular extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.state) return <div className={styles.dummy} />;
    const circle = classNames('circle', styles.circle);
    return (
      <div className={styles.container}>
        <div className="preloader-wrapper small active">
          <div className="spinner-layer spinner-red-only">
            <div className="circle-clipper left">
              <div className={circle} />
            </div>
            <div className="gap-patch">
              <div className={circle} />
            </div>
            <div className="circle-clipper right">
              <div className={circle} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Circular >> connect(
  state => state.waitting
);
