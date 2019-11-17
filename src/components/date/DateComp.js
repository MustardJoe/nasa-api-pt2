import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Datecomp.css';
import { todayDateSplit } from '../../services/todayDateSplit';

class DateComp extends Component {
  static propTypes = {
    updateDate: PropTypes.func.isRequired,
    fetchAstroData: PropTypes.func.isRequired,
    date: PropTypes.string.isRequired,
  };

  handleChange = ({ target }) => {
    this.props.updateDate(target.value);
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchAstroData();
  }

  render() {
    return (
      <div className={styles.datecompdiv}>
        <form onSubmit={this.handleSubmit}>
          Enter Date: <input type="text" name="date" value={this.props.date} 
            onChange={this.handleChange}></input>
          <button type="submit">Load APOD for this date</button>
        </form>
      </div>
    );
  }
}

export default DateComp;
