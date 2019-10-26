import React, { Component } from 'react';
import ApodComp from '../../components/apod/Apod';
import { getImage } from '../../services/nasaApi';
import default_key from '../../../key';

let ourKey = default_key;
let ourDate = '';
// const astroPhoto = {
//   date: '2017-04-16',
//   explanation: 'Does Enceladus have underground oceans that could support life?',
//   hdurl: 'https://apod.nasa.gov/apod/image/1704/EnceladusShadow_Cassini_960.jpg',
//   title: 'Life-Enabling Plumes above Enceladus',
//   url: 'https://apod.nasa.gov/apod/image/1704/EnceladusShadow_Cassini_960.jpg',
// };


class GetApod extends Component {
  state = {
    astroPhoto: {},
    loading: true,
  }

  fetchAstroData = (nasaKey, fetchDate) => {
    this.setState({ loading: true });
    let astroPhoto = getImage(nasaKey, fetchDate);
    console.log('in GetApod', astroPhoto);
    return this.setState({ astroPhoto: astroPhoto, loading: false },
      console.log(this.state));
    // return astroPhoto;
    // getImage(nasaKey, fetchDate)
    //   .then(({ astroPhoto }) => this.setState({ astroPhoto }));
  }
  
  componentDidMount() {
    this.fetchAstroData(ourKey, ourDate);
  }

  render() {
    const { astroPhoto, } = this.state;
    console.log('GetApod in render line 40', astroPhoto);

    return <ApodComp astroPhoto={astroPhoto} />;
  }
}

export default GetApod;
