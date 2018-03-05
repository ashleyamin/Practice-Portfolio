import React, { Component } from 'react';
import cover from './coverphoto.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Header" style={{backgroundImage: `url(${cover})`}}>
          <div className="Intro">
            <h1 className="Title">Ashley Amin</h1>
            <p className="Tagline">I'm a Front End Developer and Design Strategist grounded in business rigor. Whether in a team or independently, I'm always in search of creating new ideas and executing them to solve problems that help people.</p>
          </div>
          <a href="#work" className="Scroll-icon"><i className="fas fa-angle-down fa-3x"></i></a>
        </header>
        <body className="Body">
          <p className="test">stuff will go here</p>
        </body>
        <footer className="Footer">
          <div className="Footer">
            <ul>
              <li><a href="mailto:ashley.starks@gmail.com">Email</a></li>
              <li><a href="https://www.linkedin.com/in/ashleyamin/" target="_blank">LinkedIn</a></li>
              <li><a href="https://medium.com/@ashleyamin" target="_blank">Medium</a></li>
              <li><a href="https://github.com/ashleyamin" target="_blank">Github</a></li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
