import React from 'react';

import Timer from '../Timer/timer'

const Footer = () => {
  return (
      <footer className="App-footer">
          <Timer/>
        <p className="Footer-title">
          GitHub REPO: <a href="https://github.com/InamTaj/react-workshop">InamTaj/react-workshop</a>
        </p>
      </footer>
  );
};

export default Footer;