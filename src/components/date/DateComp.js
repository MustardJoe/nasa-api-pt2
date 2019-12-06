import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styles from './Datecomp.css';
// import { todayDateSplit } from '../../services/todayDateSplit';

class DateComp extends Component {
  static propTypes = {
    updateDate: PropTypes.func.isRequired,
    fetchAstroData: PropTypes.func.isRequired,
    date: PropTypes.string.isRequired,
    setPreviousDay: PropTypes.func.isRequired,
    setNextDay: PropTypes.func.isRequired,
    setRandomDay: PropTypes.func.isRequired,
  };

  handleChange = ({ target }) => {
    this.props.updateDate(target.value);
  }

  buttonClickPrevious = () => {
    this.props.setPreviousDay();
    this.props.fetchAstroData();
  };

  buttonClickNext = () => {
    this.props.setNextDay();
    this.props.fetchAstroData();
  };

  buttonClickRandom = () => {
    this.props.setRandomDay();
    this.props.fetchAstroData();
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
          <button type="submit">Load APOD for specific date</button>
          <button type="randomDay" onClick={this.buttonClickRandom}>Random Day</button>
          <button type="nextDay" onClick={this.buttonClickNext}>Next Day</button>
          <button type="previousDay" onClick={this.buttonClickPrevious}>Previous Day</button>
        </form>
      </div>
    );
  }
}

export default DateComp;
