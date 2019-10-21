import React from 'react';
// import GetApod from '../containers/apod/GetApod';
import ApodComp from '../components/apod/Apod';

const astroPhoto = {
  date: '2017-04-16',
  explanation: 'Does Enceladus have underground oceans that could support life?',
  hdurl: 'https://apod.nasa.gov/apod/image/1704/EnceladusShadow_Cassini_960.jpg',
  title: 'Life-Enabling Plumes above Enceladus',
  url: 'https://apod.nasa.gov/apod/image/1704/EnceladusShadow_Cassini_960.jpg',
};

export default function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <ApodComp astroPhoto={astroPhoto} />
    </div>
  );
}
