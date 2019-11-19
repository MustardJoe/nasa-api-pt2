import React from 'react';
import GetApod from '../containers/apod/GetApod';
import IntroText from '../components/introtext/IntroText';
import styles from '../index.css';

export default function App() {
  return (
    <div className={styles.app}>
      <div className={styles.topHead}>
        <h1>AstroView</h1>
        <h2>Helping You Experience the NASA Astronomy Picture Of the Day</h2>
        <IntroText />
      </div>
      <GetApod />
    </div>
  );
}
