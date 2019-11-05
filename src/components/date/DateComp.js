import React from 'react';
import PropTypes from 'prop-types';
import styles from './Datecomp.css';

function DateComp({ date }) {
  //maybe make this class container - look into it

  const handleTextBox = event => {
    this.setState({ ourDate: event.target.value });
  };

  return (
    <div className={styles.datecompdiv}>
      <form>
        Enter Date: <input type="text" value={date} 
          onChange={handleTextBox}></input>
      </form>
    </div>
  );
}

DateComp.propTypes = {
  date: PropTypes.string.isRequired,
};

export default DateComp;
