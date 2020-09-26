import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

// import styles
import './styles/styles.scss'

// header imports
import { Quote, SharingInfo } from './components/Header'

// content imports
import Clicks from './components/content/Clicks'
import TotalClicks from './components/content/TotalClicks'
import Leaderboard from './components/content/Leaderboard'
import Motivation from './components/content/Motivation'

// footer import
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <header>
        <div className="title"><h1>stfuandclick.com</h1></div>
        <Route path="/" exact component={Quote} />
        <Route path="/:id" component={SharingInfo} />
      </header>
      <main>
        <Route path="/" exact component={Clicks} />
        <Route path="/:id" component={TotalClicks} />
        <Route path="/" component={Leaderboard} />
        <Route path="/" component={Motivation} />
      </main>
      <Route path="/" component={Footer} />
    </BrowserRouter>
  );
}

export default App;
