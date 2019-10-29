import React from 'react';
import PropTypes from 'prop-types';
import styles from './Datecomp.css';

function DateComp({ date }) {
  function todayDateSplit() {
    var today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    return `${year}-${month}-${day}`;
  }

  let today = todayDateSplit;

  return (
    <div className={styles.datecompdiv}>
      <form>
        Enter Date: <input type="text"></input>
      </form>
    </div>
  );
}

export default DateComp;
