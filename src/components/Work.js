import React, { Component } from 'react';
import stoop_main from '../assets/stoop-main.png';
import puppy_main from '../assets/puppy-main.png';
import readysetplan_main from '../assets/readysetplan-main.png';

class Work extends Component {
  render() {
    return (
      <div className="Work">
        <div className="Latest">
          <p className="Latest-title">latest work</p>
          <p className="Latest-description">A selection of carefully crafted concepts from past and current projects</p>
        </div>
        <div className="Project-One">
          <div className="Images-One" style={{backgroundImage: `url(${stoop_main})`}}>
            <a className="Project-link" href="http://thestoop.herokuapp.com/" target="_blank">
            <div className="Project-One-Button">the stoop</div>
            </a>
          </div>
          <div className="Overview-one">The Stoop App is a collaborative tool that assists individuals in identifying
            and sharing experiences about civictech, government and community provided benefits, products
            and services in NYC. I built this using Ruby on Rails and a custom set of data utilizing three
            related table structures.</div>
        </div>
        <div className="Project-Two">
          <div className="Images-Two" style={{backgroundImage: `url(${puppy_main})`}}>
            <a className="Project-link" href="https://puppyfinderapp.herokuapp.com/" target="_blank">
            <div className="Project-Two-Button">puppyfinder</div>
            </a>
          </div>
          <div className="Overview-two">Puppies make us all happy.
            Why not make it easier to find and adopt more puppies?
            A group project in our web development immersive program, the PuppyFinder App was built
            collaboratively using React on the front end, Webpack as the build manager, Node.js and the Express
            framework on the backend, with postgres as the database.</div>
        </div>
        <div className="Project-Three">
          <div className="Images-Three" style={{backgroundImage: `url(${readysetplan_main})`}}>
            <a className="Project-link" href="http://thestoop.herokuapp.com/" target="_blank">
            <div className="Project-Three-Button">ready set plan</div>
            </a>
          </div>
          <div className="Overview-three">A medical emergency can happen at anytime. The Ready Set Plan App enables one to
            plan ahead for a medical crisis by providing a list of essential documents one
            should have created and stored for a loved one to access in the event of an emergency.
          Built using HTML/EJS, Node and Express, SQL, pg-promise, and the Google Login API for registration/authorization</div>
        </div>
      </div>
    );
  }
}

export default Work;
