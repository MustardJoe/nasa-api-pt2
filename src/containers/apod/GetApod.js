import React, { Component } from 'react';
import ApodComp from '../../components/apod/Apod';
import UserKey from '../../components/userkey/UserKey';
import DateComp from '../../components/date/DateComp';
import { getImage } from '../../services/nasaApi';
import { todayDateSplit } from '../../services/todayDateSplit';
import default_key from '../../../key';

let ourKey = default_key;
let today = todayDateSplit();

class GetApod extends Component {
  state = {
    astroPhoto: {},
    ourDate: today,
    loading: true,
    key: '',
  }

  updateKey = key => {
    this.setState(() => {
      console.log(this.state, 'line 24 in GetApod');
      return {
        key: key
      };
    });
  }

  fetchAstroData = async(nasaKey, fetchDate) => {
    this.setState({ loading: true });
    let astroPhoto = await getImage(nasaKey, fetchDate);
    return this.setState({ astroPhoto: astroPhoto, loading: false },
    );
  }

  handleTextBox = event => {
    event.preventDefault;
    this.setState({ ourDate: event.target.value });
  };
  
  componentDidMount() {
    this.fetchAstroData(ourKey, this.state.ourDate);
  }

  // componentDidUpdate() {
  //   this.fetchAstroData(ourKey, this.state.ourDate);
  // }

  render() {
    const { astroPhoto, ourDate } = this.state;
    console.log('GetApod in render line 40, logging state', this.state);

    return (
      <section>
        <UserKey updateKey={this.updateKey} />
        Enter Date: <input type="text" value={ourDate} 
          onChange={this.handleTextBox}></input>
        <ApodComp astroPhoto={astroPhoto} />
      </section>
    );
  }
}

export default GetApod;
