import React, { Component } from 'react';
import './App.css';

import FavLink from './components/FavLink'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FavLink link="https://www.twitch.tv/directory" icon="fab fa-twitch" color="twitch"/>
          <FavLink link="https://www.youtube.com/" icon="fab fa-youtube" color="youtube"/>
          <FavLink link="https://www.reddit.com/" icon="fab fa-reddit-alien" color="reddit"/>
          <FavLink link="https://github.com/xDustch?tab=repositories/" icon="fab fa-github" color="github"/>
        </header>
      </div>
    );
  }
}

export default App;
