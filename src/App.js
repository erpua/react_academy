/* import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import AuthorsView from './views/AuthorsView';

const App = () => (
  <>
    <Routes>
      <Route path="/" component={HomeView} />;
      <Route path="/authors" component={AuthorsView} />;
    </Routes>
  </>
);

export default App;
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeView from './views/HomeView';
import AuthorsView from './views/AuthorsView';
/* import BooksView from './views/BooksView';
import NotFoundView from './views/NotFoundView';
import BookDetailsView from './views/BookDetailsView'; */

const App = () => (
  <>
    {/*    <ul>
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
          to="/authors"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Authors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/books"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Books
        </NavLink>
      </li>
    </ul> */}

    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/authors" component={AuthorsView} />
    </Switch>
  </>
);

export default App;
