import ApodComp from '../../components/apod/Apod';
// import { getImage } from '../../services/nasa-api';

const testObj = {
  date: '2017-04-16',
  explanation: 'Does Enceladus have underground oceans that could support life?',
  hdurl: 'https://apod.nasa.gov/apod/image/1704/EnceladusShadow_Cassini_960.jpg',
  title: 'Life-Enabling Plumes above Enceladus',
  url: 'https://apod.nasa.gov/apod/image/1704/EnceladusShadow_Cassini_960.jpg',
};

// export default ApodComp(getImage);
export default ApodComp({ testObj });
