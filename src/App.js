import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Counter from './components/Counter';
import SignupForm from './components/SignupForm';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

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

              <Route path="/colorpicker">
                <ColorPicker options={colorPickerOptions} />
              </Route>

            </Switch>
          </>

  );
}