import React, { Component } from 'react';
import cover from './cover.JPG';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Header" style={{backgroundImage: `url(${cover})`}}>
          <h1 className="Title">Ashley Amin</h1>
          <p className="Intro">I'm a front end developer and design strategist grounded in business rigor.</p>
        </header>
        <body>
          <div className="Grid-container">
          </div>
        </body>
        <footer>
          <p>hello</p>
        </footer>
      </div>
    );
  }
}

export default App;
