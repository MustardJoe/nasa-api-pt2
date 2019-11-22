import React, { Component } from 'react';
import moment from 'moment';
import ApodComp from '../../components/apod/Apod';
import UserKey from '../../components/userkey/UserKey';
import DateComp from '../../components/date/DateComp';
import { getImage } from '../../services/nasaApi';
import { todayDateSplit } from '../../services/todayDateSplit';
// import default_key from '../../../key';

let today = todayDateSplit();

class GetApod extends Component {
  state = {
    astroPhoto: {},
    date: today,
    loading: true,
    key: 'DEMO_KEY',
  }

  updateKey = newKey => {
    this.setState({ key: newKey });
  }

  updateDate = newDate => {
    this.setState({ date: newDate });
  }

  fetchAstroData = async() => {
    this.setState({ loading: true });
    let astroPhoto = await getImage(this.state.key, this.state.date);
    return this.setState({ astroPhoto: astroPhoto, loading: false },
    );
  }

  setPreviousDay = () => {
    let newDate = moment(this.state.date).add(-1, 'days');
    return this.setState({ date: newDate.toISOString().slice(0, 10) });
  };

  setNextDay = () => {
    let newDate = moment(this.state.date).add(1, 'days');
    return this.setState({ date: newDate.toISOString().slice(0, 10) });
  };

  componentDidMount() {
    this.fetchAstroData(this.state.key, this.state.date);
  }
  


  render() {
    const { astroPhoto } = this.state;

    return (
      <div>
        <UserKey updateKey={this.updateKey} />

        <DateComp updateDate={this.updateDate}
          fetchAstroData={this.fetchAstroData}
          date={this.state.date}
          setPreviousDay={this.setPreviousDay}
          setNextDay={this.setNextDay}/>

        <ApodComp astroPhoto={astroPhoto} />
      </div>
    );
  }
}

export default GetApod;
