//Modules
import React from 'react';

//Components
import PaintingList from './components/PaintingList/PaintingList';
import Panel from './components/Panel/Panel';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Notification from './components/Notification/Notification';
import Layout from './components/Layout/Layout';

//JSON
import paintings from './paintings.json';

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
    <Layout>
      <ColorPicker options={colorPickerOptions} />

      <Notification
        text="Notification component SUCCESS"
        type="success"
      />

      <Notification
        text="Notification component ERROR"
        type="error"
      />

      <Panel title="The fresh news">
        <p>
          Lorem ipsum dolor sit, amet consectetur
          adipisicing elit.
        </p>

        <a href="https://google.com">Read more...</a>
      </Panel>

      <Panel>
        <PaintingList paintings={paintings} />
      </Panel>
    </Layout>
  );
};

export default App;
