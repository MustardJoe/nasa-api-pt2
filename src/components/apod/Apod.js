import React from 'react';
import PropTypes from 'prop-types';

function ApodComp({ astroPhoto }) {
  const {
    date = '1995 - dummy data',
    explanation,
    hdurl,
    title,
    url,
  } = astroPhoto;

  return (
    <div className="apodItem">
      <h2>{title}</h2>
      <img src={url} />
      <p>Desciption: {explanation}</p>
      <p>Astronomy Photo of the Day from: {date}</p>
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
