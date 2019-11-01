import React, { Component } from 'react';
import ApodComp from '../../components/apod/Apod';
import { getImage } from '../../services/nasaApi';
import default_key from '../../../key';

let ourKey = default_key;
let ourDate = '';

function todayDateSplit() {
  var today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  return `${year}-${month}-${day}`;
}

let today = todayDateSplit;

class GetApod extends Component {
  state = {
    astroPhoto: {},
    //add date stuff here
    loading: true,
  }

  fetchAstroData = async(nasaKey, fetchDate) => {
    this.setState({ loading: true });
    let astroPhoto = await getImage(nasaKey, fetchDate);
    return this.setState({ astroPhoto: astroPhoto, loading: false },
      console.log('in fetchAstroData, logging state', this.state));
    // return astroPhoto;
    // getImage(nasaKey, fetchDate)
    //   .then(({ astroPhoto }) => this.setState({ astroPhoto }));
  }
  
  componentDidMount() {
    this.fetchAstroData(ourKey, ourDate);
  }

  render() {
    const { astroPhoto, } = this.state;
    console.log('GetApod in render line 40, logging state', this.state);

    return <ApodComp astroPhoto={astroPhoto} />;
  }
}

export default GetApod;
