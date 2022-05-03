import React from 'react';
import Logo from './components/Logo';
import PaintingList from './components/PaintingList';
import Panel from './components/Panel';
import paintings from './paintings.json';

const App = () => {
  return (
    <div>
      <Panel title="The fresh news">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam,
          obcaecati dolorum assumenda vitae aspernatur, aliquid numquam
          explicabo, facere tenetur unde dolorem quo! Sit iusto natus at,
          aliquam, repellendus repellat ipsa eligendi dolorem tempore atque
          reprehenderit nulla magnam reiciendis, aliquid minus tenetur ipsam
          fuga. Quas vel, sunt voluptatum debitis incidunt numquam?
        </p>

        <a href="https://google.com">Read more...</a>
      </Panel>

      <Panel>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
          explicabo aperiam architecto perspiciatis quae amet. Porro magni
          laudantium aspernatur debitis deserunt ipsam. Nostrum id accusamus
          praesentium eum incidunt tenetur cum!
        </p>
      </Panel>

      <Logo text="the main app component-container" />
      <PaintingList paintings={paintings} />
    </div>
  );
};

export default App;
