import React, { Component } from 'react';

import '../App.css';
import CharacterList from '../containers/CharacterListContainer'

class Main extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="http://cdn.pcwallart.com/images/game-of-thrones-logo-png-wallpaper-4.jpg"
          height="50%"
          width="50%"
        />
          <h2>Welcome to GOT Spoliers</h2>
        </div>
        <div className="App-intro">
          <CharacterList/>
        </div>
      </div>
    );
  }
}

export default Main;
