import React, { Component } from 'react';
import cover from '../coverphoto.png';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footer">
          <ul>
            <li className="Contact"><a className="Contact-link" href="mailto:ashley.starks@gmail.com">Email</a></li>
            <li className="Contact"><a className="Contact-link" href="https://www.linkedin.com/in/ashleyamin/" target="_blank">LinkedIn</a></li>
            <li className="Contact"><a className="Contact-link" href="https://medium.com/@ashleyamin" target="_blank">Medium</a></li>
            <li className="Contact"><a className="Contact-link" href="https://github.com/ashleyamin" target="_blank">Github</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
