import React from 'react';
//Route is being used only inside of Routes
//Link is that sama tag <a href="https://..." target="_blank">link for changing</a>, but without reloading the page
import { Route, Routes, Link } from 'react-router-dom';
import HomeView from './views/HomeView';
import AuthorsView from './views/AuthorsView';
import BooksView from './views/BooksView';
import NotFoundView from './views/NotFoundView';

const App = () => (
  <>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/authors">AuthorsView</Link>
      </li>
      <li>
        <Link to="/books">BooksView</Link>
      </li>
    </ul>
    <Routes>
      {/*  <Route exact path="/" component={HomeView} />; */}
      {/*  <Route path="/authors" component={AuthorsView} />;
      <Route path="/books" component={BooksView} />; */}
      {/* exact prop use only when it's exact match. In case
      of  http://localhost:3000/auhors/?q=...  => it is not exact render
      of this page*/}
      <Route exact path="/" element={<HomeView />} />;
      <Route path="/authors" element={<AuthorsView />} />;
      <Route path="/books" element={<BooksView />} />;
      <Route element={<NotFoundView />} />
    </Routes>
  </>
);

export default App;
