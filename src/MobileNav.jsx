import React, { Component } from 'react';

class Mob extends Component {
  render() {
    return (
      <div className="mobile-nav">
        <i className="fas fa-home home-logo"></i>
        <div className="v-line"></div>
        <i className="fas fa-tools tool-logo"></i>
        <div className="z-line"></div>
        <i className="fas fa-bullseye target-logo"></i>
      </div>
    )
  }
}

export default Mob;
