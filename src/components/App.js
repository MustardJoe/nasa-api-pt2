import React from 'react';
import GetApod from '../containers/apod/GetApod';
import DateComp from '../components/date/DateComp';

export default function App() {
  return (
    <div>
      <h1>Jon's Nasa Astronomy Photo Of the Day Experience</h1>
      <GetApod />
    </div>
  );
}
