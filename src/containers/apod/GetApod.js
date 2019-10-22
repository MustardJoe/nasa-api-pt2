import React, { Component } from 'react';
import ApodComp from '../../components/apod/Apod';
import { getImage } from '../../services/nasaApi';

// const astroPhoto = {
//   date: '2017-04-16',
//   explanation: 'Does Enceladus have underground oceans that could support life?',
//   hdurl: 'https://apod.nasa.gov/apod/image/1704/EnceladusShadow_Cassini_960.jpg',
//   title: 'Life-Enabling Plumes above Enceladus',
//   url: 'https://apod.nasa.gov/apod/image/1704/EnceladusShadow_Cassini_960.jpg',
// };


class GetApod extends Component {
  state = {
    astroPhoto: {}
  }

  fetchAstroData = () => {
    getImage()
      .then(({ astroPhoto }) => this.setState({ astroPhoto }));
  }
  
  componentDidMount() {
    this.fetchAstroData();
  }

  render() {
    const { astroPhoto } = this.state;

    return <ApodComp astroPhoto={astroPhoto} />;
  }
}

// export default ApodComp({ astroPhoto });
export default GetApod;
