//Our NASA API calls are here - basic structure take from my Rick And Morty thing
// import default_key from '../../key';

const url = 'https://api.nasa.gov/planetary/apod';
// const key = default_key;
// /* eslint-disable-next-line no-console */
// console.log(key);

export const getImage = async(key = key, date) => {
  const res = await fetch(`${url}api_key=${key}${date}`);
  const ok = res.ok;
  if(!ok) {
    throw new Error('Unable to fetch Astronomy Photo');
  }
  const json = await res.json();
  console.log(json);
  return json;

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


