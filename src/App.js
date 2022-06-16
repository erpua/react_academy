import React from 'react';
/* import { Switch } from 'react-router'; */
//Route is being used only inside of Routes
//Link is that sama tag <a href="https://..." target="_blank">link for changing</a>, but without reloading the page
import { Route, NavLink, Switch } from 'react-router-dom';

import HomeView from './views/HomeView';
import AuthorsView from './views/AuthorsView';
import BooksView from './views/BooksView';
import NotFoundView from './views/NotFoundView';
import BookDetailsView from './views/BookDetailsView';

const App = () => (
  <>
    <header className="AppBar">
      <nav></nav>
    </header>
    <ul>
      <li>
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="NavLink"
          activeClassName="NavLink--active"
          to="/authors"
        >
          Authors
        </NavLink>
      </li>
      <li>
        <NavLink
          className="NavLink"
          activeClassName="NavLink--active"
          to="/books"
        >
          Books
        </NavLink>
      </li>
    </ul>

    <Switch>
      <Route exact path="/" component={HomeView} />;
      <Route path="/authors" component={AuthorsView} />;
      <Route exact path="/books" component={BooksView} />;
      <Route path="/books/:bookId" component={BookDetailsView} />
      <Route component={NotFoundView} />;
    </Switch>
  </>
);

export default App;
