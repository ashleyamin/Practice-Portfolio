import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Work from './components/Work';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Work />
          <About />
        <Footer />
      </div>
    );
  }
}

export default App;
