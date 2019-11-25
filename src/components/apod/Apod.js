import React from 'react';
import PropTypes from 'prop-types';
import styles from './Apod.css';

function ApodComp({ astroPhoto }) {
  const {
    date = '1995 - dummy data',
    explanation = 'No data is loading, you may have encountered the rate limit',
    hdurl,
    title,
    url,
  } = astroPhoto;

  return (
    <div className={styles.apodItem}>
      <h2>{title}</h2>
      <img src={url} />
      <p>Desciption: {explanation}</p>
      <p>Astronomy Picture of the Day from: {date}</p>
      <p>SD image: <a href={url}>{url}</a></p>
      <p>HD Image: <a href={hdurl}>{hdurl}</a></p>
    </div>
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
