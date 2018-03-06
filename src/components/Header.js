import React, { Component } from 'react';
import cover from '../coverphoto.png';

class Header extends Component {
  render() {
    return (
      <div className="Header" style={{backgroundImage: `url(${cover})`}}>
        <div className="Intro">
          <h1 className="Title">Ashley Amin</h1>
          <p className="Tagline">I'm a Front End Developer and Design Strategist grounded in business rigor. Whether in a team or independently, I'm always in search of creating new ideas and executing them to solve problems that help people.</p>
        </div>
        <a href="#work" className="Scroll-icon"><i className="fas fa-angle-down fa-3x"></i></a>
      </div>
    );
  }
}

export default Header;
