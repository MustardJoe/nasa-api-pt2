//Our NASA API calls are here - basic structure take from my Rick And Morty thing

const url = 'https://api.nasa.gov/planetary/apod';

export const getImage = async(key, date) => {
  const res = await fetch(`${url}?api_key=${key}${date}`);
  const ok = res.ok;
  if(!ok) {
    throw new Error('Unable to fetch Astronomy Photo');
  }
  const astroPhoto = await res.json();
  console.log('in api', astroPhoto);
  return astroPhoto;

  // return fetch(`${url}?api_key=${key}${date}`)
  //   .then(res => ([res.ok, res.json()]))
  //   .then(([ok, json]) => {
  //     if(!ok) throw 'Unable to fetch Astronomy Photo';

  //     return json;
  //   })
  //   .then(({ res }) => res.map(astroPhoto => ({
  //     date: astroPhoto.date,
  //     explanation: astroPhoto.explanation,
  //     hdurl: astroPhoto.hdurl,
  //     title: astroPhoto.title,
  //     url: astroPhoto.url,
  //   })));
};


