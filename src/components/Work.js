import React, { Component } from 'react';

class Work extends Component {
  render() {
    return (
      <div className="Work">
        <div className="Latest">
          <p className="Latest-title">latest work</p>
          <p className="Latest-description">A selection of carefully crafted concepts from past and current projects</p>
        </div>
        <div className="Project-One">
          <p className="Images-One">Image Here</p>
          <p className="Overview-One">here is more stuff to describe each project</p>
        </div>
        <div className="Project-Two">
          <p className="Images-Two">Image Here</p>
          <p className="Overview-Two">more stuff to describe each project</p>
        </div>
      </div>
    );
  }
}

export default Work;
