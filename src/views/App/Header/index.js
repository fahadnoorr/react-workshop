import React from 'react';
import logo from '../../../static/img/logo-pacman.svg';

import Timer from '../../Timer/index';

const Index = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">React Workshop</h1>
    <p>Birthplace of Great React Developers!</p>
    <Timer />
  </header>
);

export default Index;