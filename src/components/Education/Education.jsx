import React from 'react'

import styles from "./Education.module.css";

const Education = () => {
  return (
    <div id="education">
      <h2 className={styles.title}>Education</h2>
      <ul className={styles.history}>
        <li className={styles.historyItem}>
          <div className={styles.historyItemDetails}>
            <h3>Bachelor of Technology (Computer Science and Engineering)</h3>
            <p>2017-2021</p>
            <div className={styles.clg}>
              <p>
                Dr. A. P. J. Abdul Kalam Technical University, Lucknow,
                UttarPradesh
              </p>
              <h4>87.2%</h4>
            </div>
          </div>
        </li>
        <br />
        <li className={styles.historyItem}>
          <div className={styles.historyItemDetails}>
            <h3>Higher Secondary (Class 12)</h3>
            <p>2015-2016</p>
            <div className={styles.clg}>
              <p>MASS KAMTI KALA DHARDE BABURI VARANASI, UP</p>
              <h4>72.8%</h4>
            </div>
          </div>
        </li>
        <br />
        <li className={styles.historyItem}>
          <div className={styles.historyItemDetails}>
            <h3>Secondary (Class 10th)</h3>
            <p>2013-2014</p>
            <div className={styles.clg}>
              <p>The Scholars Home, Varanasi, UP</p>
              <h4>91.2%</h4>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Education
