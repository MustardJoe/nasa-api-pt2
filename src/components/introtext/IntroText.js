import React from 'react';

export default function IntroText() {
  return (
    <>
      <p>Welcome to AtroView! I love astronomy and
        outer space, and so I created a user-friendly way to browse through the 
        decades of awesome daily astronomy photos provided by the NASA api.
      </p>
      <p>
        To use this site you must have a key for the NASA api, which you can obtain
        at <a href="https://api.nasa.gov/">api.nasa.gov/</a>. By default AstroView
        will load the Astronomy Photo Of the Day (APOD) for today.  Enter a date
        of your choosing in the date box to view any other APOD. Note: no data
        exists before 1995-6-20.
      </p>
    </>
  );
}
