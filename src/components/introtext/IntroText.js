import React from 'react';

export default function IntroText() {
  return (
    <>
      <p>
        Welcome to AtroView! I love astronomy and
        outer space, and so I created a user-friendly way to browse through the 
        decades of awesome daily astronomy photos provided by the NASA api.
      </p>
      <p>
        The NASA api requires a user key to retrive data. AstroView is set up to opperate
        using the NASA api demo key by default. However, the demo key has some data
        restrictions. If you have a NASA api key of your own,
        you can enter it below and AstroView will use that instead. (Your key is never stored
        anywhere beyond your browser session cache). You can obtain your own key at
        <a href="https://api.nasa.gov/">api.nasa.gov/</a>. By default AstroView
        will load the Astronomy Picture Of the Day (APOD) for today.  Enter a date
        of your choosing in the date box to view any other APOD. Note: no data
        exists before 1995-6-20.
      </p>
    </>
  );
}
