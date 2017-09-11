import React from 'react';
import styles from './Body.sass';

export default function Body() {
  return (
    <div className={styles.container}>
      <p
        className={styles.bigText}>
        くん‐とう〔‐タウ〕【薫陶】
      </p>
      <p className={styles.detail}>
        ［名］(スル) 徳の力で人を感化し、教育すること。「薫陶のたまもの」
      </p>
      <p className={styles.purpose}>
        「あなたの身体を，　　　　　　　
      </p>
      <p className={styles.purpose}>
        　　薫陶することを目指します」
      </p>
    </div>
  );
}
