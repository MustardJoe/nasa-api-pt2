//Our NASA API calls are here - basic structure take from my Rick And Morty thing

const url = 'https://api.nasa.gov/planetary/apod';
const

export const getImage = (key, date) => {
  console.log('here in api fetch');
  return fetch(`${url}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch Astronomy Photo';

      return json;
    })
    .then(({ results }) => results.map(photo => ({
      date: photo.date,
      explanation: photo.explanation,
      hdurl: photo.hdurl,
      title: photo.title,
      url: photo.url,
    })));
};
