import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <body className="Body">
          <p className="test">stuff will go here</p>
        </body>
      <Footer />
      </div>
    );
  }
}

export default App;
