import { isEmpty } from 'lodash';
import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './Header.sass';
import User from '../../models/user';

export default function Head() {
  const button = classNames('waves-effect', 'waves-light', 'btn', styles.button);
  const isAuthenticated = !isEmpty(User.currentUserToken());
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <img src="icon_blue_transport.png" />
      </div>
      <p className={styles.bigTitle}>薫陶 - Kunto -</p>
      <p className={styles.description}>ダイエットに挫折したあなた</p>
      <p className={styles.description}>筋トレが継続できないあなた</p>
      <p className={styles.description}>運動不足のあなた</p>
      <p className={styles.subTitle}>
        薫陶で筋トレを始めませんか？
      </p>
      {
        (() => {
          if (isAuthenticated) {
            const primaryButton = classNames(button, 'teal', 'darken-1');
            return (
              <div className={styles.buttonGroup}>
                <Link
                  to="my"
                  className={primaryButton}
                >
                  マイページに行く
                </Link>
              </div>
            );
          }
          return (
            <div className={styles.buttonGroup}>
              <Link
                to="sign_up"
                className={button}
              >
                新規登録して薫陶をはじめる
              </Link>
              <Link
                to="sign_in"
                className={button}
              >
                ログインはこちら
              </Link>
            </div>
          );
        })()
      }
    </div>
  );
}
