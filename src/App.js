import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import Counter from './components/Counter';
import UserMenu from './components/UserMenu';

export default function App() {
  return (
    <BrowserRouter>
      <AppBar />

      <Switch>
        <Route path="/counter">
          <Counter />
        </Route>

        <Route path="/context">
          <UserMenu />
        </Route>
      </Switch>
  </BrowserRouter>
  );
}