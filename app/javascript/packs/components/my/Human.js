import React from 'react';
import styles from './Human.sass';

export default class Human extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container} >
        <h4>Status</h4>
        <div className={styles.human}>
          <div className={styles.head} />
          <div className={styles.armLeft} />
          <div className={styles.body} />
          <div className={styles.pectoralLeft} />
          <div className={styles.pectoralRight} />
          <div className={styles.rectusAbdominis} />
          <div className={styles.armRight} />
        </div>
      </div>
    );
  }
}
