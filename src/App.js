import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Featured from './Featured';
import Main from './Main';
import Mob from './MobileNav';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Featured />
        <Main />
        <Footer />
        <Mob />
      </div>
    );
  }
}

export default App;
