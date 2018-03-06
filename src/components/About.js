import React, { Component } from 'react';
import soccer from '../soccerphoto.jpg';

class About extends Component {
  render() {
    return (
      <div className="About" style={{backgroundImage: `url(${soccer})`}}>
        <div>
          <h1 className="About-me"> About Me </h1>
          <p className="Story">I help organizations and individuals develop memorable, fun applications & define
              seamless & meaningful experiences for mobile & the web.</p>
          <p className="Story">When I’m not developing you will find me playing pick up soccer in New York City, spending time with family in Ohio, snowboarding in Tahoe or running a half marathon in Austin.</p>
          <br />
        </div>
      </div>
    );
  }
}

export default About;
