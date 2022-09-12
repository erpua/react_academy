import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import Counter from './components/Counter';
import SignupForm from './components/SignupForm';

export default function App() {
  return (
   <>
   <AppBar />

<Switch>
  <Route path="/counter">
    <Counter />
  </Route>

  <Route path="/signup">
    <SignupForm />
  </Route>
</Switch>
   </>
      

  );
}