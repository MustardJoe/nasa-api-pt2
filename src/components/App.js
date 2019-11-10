import React from 'react';
import GetApod from '../containers/apod/GetApod';
import DateComp from '../components/date/DateComp';
import styles from '../index.css';

export default function App() {
  return (
    <div>
      <div className={styles.topHead}>
        <h1>AstroView</h1>
        <h2>Helping You Experience the NASA Astronomy Photo Of the Day</h2>
      </div>
      <GetApod />
    </div>
  );
}
