import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeView from './views/HomeView';
import AuthorsView from './views/AuthorsView';
import BooksView from './views/BooksView';
import NotFoundView from './views/NotFoundView';
import BookDetailsView from './views/BookDetailsView';

import AppBar from './components/AppBar/AppBar';
import routes from './routes';

const App = () => (
  <>
    {/*  <header className="AppBar">
      <nav className="nav nav-pills">
        <NavLink
          exact
          to={routes.home}
          className="nav-link"
          activeClassName="active"
        >
          Home
        </NavLink>

        <NavLink
          to={routes.authors}
          className="nav-link"
          activeClassName="active"
        >
          Authors
        </NavLink>

        <NavLink
          to={routes.books}
          className="nav-link"
          activeClassName="active"
        >
          Books
        </NavLink>
      </nav>
    </header> */}

    <AppBar />

    <Switch>
      <Route exact path={routes.home} component={HomeView} />;
      <Route path={routes.authors} component={AuthorsView} />;
      <Route exact path={routes.books} component={BooksView} />;
      <Route path={routes.bookDetails} component={BookDetailsView} />
      <Route component={NotFoundView} />;
    </Switch>
  </>
);

export default App;
