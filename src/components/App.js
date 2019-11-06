import React from 'react';
import GetApod from '../containers/apod/GetApod';
import DateComp from '../components/date/DateComp';

export default function App() {
  return (
    <div>
      <h1>AstroView</h1>
      <h2>Helping You Experience the NASA Astronomy Photo Of the Day</h2>
      <GetApod />
    </div>
  );
}
