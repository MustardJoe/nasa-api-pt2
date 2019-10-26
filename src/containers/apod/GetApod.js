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
  }

  fetchAstroData = (nasaKey, fetchDate) => {
    let astroPhoto = getImage(nasaKey, fetchDate);
    console.log('in GetApod', astroPhoto);
    return astroPhoto;
    // getImage(nasaKey, fetchDate)
    //   .then(({ astroPhoto }) => this.setState({ astroPhoto }));
  }
  
  componentDidMount() {
    this.fetchAstroData(ourKey, ourDate);
  }

  render() {
    const { astroPhoto, } = this.state;

    return <ApodComp astroPhoto={astroPhoto} />;
  }
}

// export default ApodComp({ astroPhoto });
export default GetApod;
