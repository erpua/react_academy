import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';

const AppBar = () => {
  return (
    <header className="AppBar">
      <Navigation />
    </header>
  );
};

export default AppBar;
