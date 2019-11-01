import React from 'react';
import PropTypes from 'prop-types';
import styles from './Datecomp.css';

function DateComp({ date }) {
  //maybe make this class container - look into it

  return (
    <div className={styles.datecompdiv}>
      <form>
        Enter Date: <input type="text">{date}</input>
      </form>
    </div>
  );
}

DateComp.propTypes = {
  date: PropTypes.string,
};

export default DateComp;
