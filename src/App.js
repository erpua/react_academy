//Modules
import React from 'react';

//Components
/* import Counter from './components/Counter/Counter'; */
/* import Dropdown from './components/Dropdown/Dropdown'; */
import ColorPicker from './components/ColorPicker/ColorPicker';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

// <></> => Babel converts to <React.Fragment> < /React.Fragment>
const App = () => {
  return (
    <>
      <h1>Component states-n-events</h1>
      {/*  <Counter text="Counter Component" initialValue={20}></Counter> */}
      {/*      <Dropdown /> */}
      <ColorPicker options={colorPickerOptions} />
    </>
  );
};

export default App;
