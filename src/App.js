//Modules
import React from 'react';

//Components
import Logo from './components/Logo';
import PaintingList from './components/PaintingList/PaintingList';
import Panel from './components/Panel/Panel';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Notification from './components/Notification/Notification';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';

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
function App() {
  return (
    <>
      <AppBar />

      <Container>
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
            adipisicing elit. Magnam, obcaecati dolorum
            assumenda vitae aspernatur, aliquid numquam
            explicabo, facere tenetur unde dolorem quo! Sit
            iusto natus at, aliquam, repellendus repellat
            ipsa el
          </p>

          <a href="https://google.com">Read more...</a>
        </Panel>

        <Panel>
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Unde, explicabo aperiam
            architecto perspiciatis quae amet. Porro magni
            laudantium aspernatur debitis deserunt ipsam.
            Nostrum id accusamus praesentium eum incidunt
            tenetur cum!
          </p>
        </Panel>

        <Logo text="the main app component-container" />
        <PaintingList paintings={paintings} />
      </Container>
    </>
  );
}

export default App;
