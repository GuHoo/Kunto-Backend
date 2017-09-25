import React from "react";
import classNames from "classnames";
import styles from "./Header.sass";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className="row">
        <div className="col s1" />
        <div className="col s10">
          <h1>ログイン</h1>
        </div>
        <div className="col s1" />
      </div>
    </div>
  );
}
