import React, { Component } from 'react';
import './App.css';

/*import FavLink from './components/FavLink'*/
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
          <Footer/>
        </header>
      </div>
    );
  }
}

export default App;
