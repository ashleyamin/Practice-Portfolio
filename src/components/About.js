import React, { Component } from 'react';
import soccer from '../soccerphoto.jpg';

class About extends Component {
  render() {
    return (
      <div className="About" style={{backgroundImage: `url(${soccer})`}}>
        <div>
          <h1 className="About-me"> about me </h1>
          <p className="Story"><span>I help organizations and individuals define and develop seamless and meaningful digital experiences.</span></p>
          <p className="Story">When I’m not developing you will find me playing pick up soccer in new york city, snowboarding in tahoe or running a half marathon in austin.</p>
          <br />
        </div>
      </div>
    );
  }
}

export default About;
