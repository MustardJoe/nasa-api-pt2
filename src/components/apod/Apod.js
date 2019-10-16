import React from 'react';
import PropTypes from 'prop-types';

function ApodComp({ astroPhoto }) {
  const {
    date = '1995', explanation, hdurl, title, url,
  } = astroPhoto;

  return (
    <section>
      <h3>{title}</h3>
      <img src="https://apod.nasa.gov/apod/image/1704/EnceladusShadow_Cassini_960.jpg" />
      <p>{explanation}</p>
      <p>{date}</p>
      <p>{url}</p>
      <p>{hdurl}</p>
    </section>
  );
}

ApodComp.propTypes = {
  astroPhoto: PropTypes.shape({
    date: PropTypes.string,
    explanation: PropTypes.string,
    hdurl: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
  }).isRequired
};

export default ApodComp;
