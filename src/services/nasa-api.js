//Our NASA API calls are here - basic structure take from my Rick And Morty thing
import default_key from '../../key';

const url = 'https://api.nasa.gov/planetary/apod';
const key = default_key;


export const getImage = (key, date) => {

  console.log('here in api fetch');
  return fetch(`${url}${key}${date}`)
    .then(res => ([res.ok, res.json()]))
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
