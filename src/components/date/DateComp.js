import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styles from './Datecomp.css';
// import { todayDateSplit } from '../../services/todayDateSplit';

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
      <div>
        <form onSubmit={this.handleSubmit}>
          Enter Date: <input type="text" name="date" value={this.props.date} 
            onChange={this.handleChange}></input>
          <button type="submit">Load APOD for this date</button>
        </form>
        <select>
          <option value="day">Day</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    );
  }
}

export default DateComp;
