//Modules
import React from 'react';

//Components
import Counter from './components/Counter/Counter';

/* const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
]; */

// <></> => Babel converts to <React.Fragment> < /React.Fragment>
const App = () => {
  return (
    <>
      <h1>Component state</h1>
      <Counter text="This is branch 03 - Counter.js Component"></Counter>
    </>
  );
};

export default App;
