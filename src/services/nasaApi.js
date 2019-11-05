//Our NASA API calls are here - basic structure take from my Rick And Morty thing

const url = 'https://api.nasa.gov/planetary/apod';

export const getImage = async(key, date) => {
  const res = await fetch(`${url}?api_key=${key}&date=${date}`);
  const ok = res.ok;
  if(!ok) {
    throw new Error('Unable to fetch Astronomy Photo');
  }
  const astroPhoto = await res.json();
  return astroPhoto;
};

