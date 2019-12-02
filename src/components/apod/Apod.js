import React from 'react';
import PropTypes from 'prop-types';
import styles from './Apod.css';
const loadingImg = '../../src/assets/loadingimg.gif';

function ApodComp({ astroPhoto, loading }) {
  console.log('loading', loading);
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
      <img src={loading ? loadingImg : url} />
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
  }).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default ApodComp;
