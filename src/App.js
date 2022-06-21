/* import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeView from './views/HomeView';
import AuthorsView from './views/AuthorsView';
import BooksView from './views/BooksView';
import BookDetailsView from './views/BookDetailsView';
import NotFoundView from './views/NotFoundView';

import AppBar from './components/AppBar/AppBar';
import routes from './routes';

const loader = () => import('./views/HomeView'); */

//Code chunking (chunks => components divided
//each one for loading when it is needed

import NotFoundView from './views/NotFoundView';
import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppBar from './components/AppBar/AppBar';
import routes from './routes';

/* const AsyncHomeView = lazy(() => import('./views/HomeView.js')); */
const HomeView = lazy(() => import('./views/HomeView.js'));

const AuthorsView = lazy(() => import('./views/AuthorsView.js'));

const BooksView = lazy(() => import('./views/BooksView.js'));

const BookDetailsView = lazy(() => import('./views/BookDetailsView.js'));

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
    {/*  <button onClick={() => import('./views/HomeView')}>Get home</button>; */}
    {/*   <button onClick={() => loader().then(console.log)}>Get home</button>; */}
    <Switch>
      {/*  <Route exact path={routes.home} component={AsyncHomeView} />; */}
      <Route exact path={routes.home} component={HomeView} />;
      <Route path={routes.authors} component={AuthorsView} />;
      <Route exact path={routes.books} component={BooksView} />;
      <Route path={routes.bookDetails} component={BookDetailsView} />
      <Route component={NotFoundView} />;
    </Switch>
  </>
);

export default App;
