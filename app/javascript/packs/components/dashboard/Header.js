import React from 'react';
import styles from './Header.sass';
import { Link } from 'react-router-dom';

export default function Head() {
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
      <div className={styles.buttonGroup}>
        <Link to="signup" className="waves-effect waves-light btn">新規登録して薫陶をはじめる</Link>
        <Link to="login" className="waves-effect waves-light btn">ログインはこちら</Link>
      </div>
    </div>
  );
}