import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Datecomp.css';
import { todayDateSplit } from '../../services/todayDateSplit';

let today = todayDateSplit();

class DateComp extends Component {
  static propTypes = {
    updateDate: PropTypes.func.isRequired
  };

  state = {
    date: today
  }

  // handleTextBox = event => {
  //   this.setState({ ourDate: event.target.value });
  // };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { date } = this.state;
    /* eslint-disable-next-line no-console */
    console.log(date, 'date cLog DateComp');
    this.props.updateDate({ date: date });
  }

  // name="key" value={this.state.key} onChange={this.handleChange}
  render() {
    return (
      <div className={styles.datecompdiv}>
        <form onSubmit={this.handleSubmit}>
          Enter Date: <input type="text" name="date" value={this.state.date} 
            onChange={this.handleChange}></input>
          <button>Load APOD for this date</button>
        </form>
      </div>
    );
  }
}

export default DateComp;
