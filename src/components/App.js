import React from 'react';
import GetApod from '../containers/apod/GetApod';
import IntroText from '../components/introtext/IntroText';
import About from '../components/about/About';
import styles from '../index.css';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
} from 'react-router-dom';

export default function App() {
  return (
    <div className={styles.app}>
      <Router>
        <div className={styles.topHead}>
          <h1>AstroView</h1>
          <h2>Helping You Experience the NASA Astronomy Picture Of the Day</h2>
          <nav>
            <Link className={styles.link} to="/">Home</Link>
            <Link className={styles.link} to="/about">About</Link>
          </nav>
        </div>
        <Switch>
          <Route exact path="/" component={GetApod} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}
