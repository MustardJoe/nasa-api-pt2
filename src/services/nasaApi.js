//Our NASA API calls are here - basic structure take from my Rick And Morty thing
// import default_key from '../../key';

const url = 'https://api.nasa.gov/planetary/apod';
// const key = default_key;
// /* eslint-disable-next-line no-console */
// console.log(key);

export const getImage = (key = key, date) => {

  return fetch(`${url}?api_key=${key}${date}`)
    .then(res => ([res.ok, res.json()]))
    .then(res => console.log('res line 15', res))
    .then(res => console.log('somewhere right around here is the error'))
    .then(console.log(`Constructed URL: ${url}?api_key=${key}${date}`))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch Astronomy Photo';

      return json;
    })
    .then(({ results }) => results.map(astroPhoto => ({
      date: astroPhoto.date,
      explanation: astroPhoto.explanation,
      hdurl: astroPhoto.hdurl,
      title: astroPhoto.title,
      url: astroPhoto.url,
    })));
};


