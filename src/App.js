/* import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Code chunking (chunks => components divided
//each one for loading when it's needed

const loader = () => import('./views/HomeView'); */

import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import NotFoundView from './views/NotFoundView';
import routes from './routes';

//Code chunking (chunks => components divided
//each one for loading when it's needed

/* const AsyncHomeView = lazy(() => import('./views/HomeView.js')); */
const HomeView = lazy(() =>
  import('./views/HomeView.js' /* webpackChunkName: "home-view" */),
);

const AuthorsView = lazy(() =>
  import('./views/AuthorsView.js' /* webpackChunkName: "authors-view" */),
);

const BooksView = lazy(() =>
  import('./views/BooksView.js' /* webpackChunkName: "books-view" */),
);

const BookDetailsView = lazy(() =>
  import(
    './views/BookDetailsView.js' /* webpackChunkName: "book-details-view" */
  ),
);

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

    {/* Suspense is a Container for lazy */}
    {/*  <Suspense fallback={<Spinner />}></Suspense> */}
    <Suspense fallback={<h1>Downloading ...</h1>}>
      <Switch>
        {/*  <Route exact path={routes.home} component={AsyncHomeView} />; */}
        <Route exact path={routes.home} component={HomeView} />;
        <Route path={routes.authors} component={AuthorsView} />;
        <Route exact path={routes.books} component={BooksView} />;
        <Route path={routes.bookDetails} component={BookDetailsView} />
        <Route component={NotFoundView} />;
      </Switch>
    </Suspense>
  </>
);

export default App;
