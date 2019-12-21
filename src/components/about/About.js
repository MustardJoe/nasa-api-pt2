import React from 'react';
import IntroText from '../introtext/IntroText';
import styles from './about.css';

function About() {
  return (
    <section className={styles.about}>
      <IntroText />
      <h2>About AstroView</h2>
      <p>
        Upon first loading the site, AstroView loads with Astronomy Picture Of the Day (APOD)
        for the present day.  The NASA api (and as a result, this site) use ISO formatted
        dates (YYYY-MM-DD format).  You can use the text field to enter a specific date to
        load that day’s picture, or you can navigate to a random date or next day/previous
        day with the buttons. Please note no data exists beyond the current date. Also,
        no data exists prior to June 20th 1995 (1995-6-20).
      </p>
      <p>
        The NASA api requires a user key to retrieve data.  AstroView is configured to
        operate using the NASA api demo key by default.  However, the demo key has some
        data restrictions and will stop loading data if the limit is met.  For your
        convenience, you may enter your own user key and AstroView will use that instead.
        (Your key is never stored anywhere beyond your browser session cache.)  You
        can obtain a NASA api user key at <a href="https://api.nasa.gov/">api.nasa.gov/</a>.
      </p>
      <p>
        The background image is the APOD from June 4th, 2017 (2017-6-4).  
      </p>
      <p>
        <span>
          AstroView ©2019 by <a href="https://www.jonforney.com" target="_blank"
            rel="noopener noreferrer">Jon Forney</a>.
        </span> 
      </p>
    </section>
  );
}

export default About;
