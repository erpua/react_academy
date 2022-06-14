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

/* const linkStyles = {
  base: { color: 'teal' },
  active: { color: 'orangered' },
};
 */
const App = () => (
  <>
    {/*
    import { Route, Link, Switch } from 'react-router-dom';

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
      <Switch>
        //for later version of react-router-dom 6.0
        <Route exact path="/" element={<HomeView />} />;
        <Route path="/authors" element={<AuthorsView />} />;
        <Route path="/books" element={<BooksView />} />;
        <Route path="*" element={<NotFoundView />} />
      </Switch>
    </Routes>
    */}

    {/* style => general activeStyle => if we are at current path */}
    {/*   <ul>
      <li>
        <NavLink
          style={linkStyles.base}
          activeStyle={linkStyles.active}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          style={linkStyles.base}
          activeStyle={linkStyles.active}
          to="/authors"
        >
          AuthorsView
        </NavLink>
      </li>
      <li>
        <NavLink
          style={linkStyles.base}
          activeStyle={linkStyles.active}
          to="/books"
        >
          BooksView
        </NavLink>
      </li>
    </ul> */}
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
          AuthorsView
        </NavLink>
      </li>
      <li>
        <NavLink
          className="NavLink"
          activeClassName="NavLink--active"
          to="/books"
        >
          BooksView
        </NavLink>
      </li>
    </ul>

    <Switch>
      <Route exact path="/" component={HomeView} />;
      <Route path="/authors" component={AuthorsView} />;
      {/* One way of rendering only choseen book */}
      {/* /:bookId is dynamic parametr. Can be any: qwe => this is pattern */}
      {/*  <Route
        path="/books/:bookId"
        component={BookDetailsView}
      />
      <Route path="/books" component={BooksView} />; */}
      {/* Another way */}
      <Route exact path="/books" component={BooksView} />;
      <Route path="/books/:bookId" component={BookDetailsView} />
      <Route component={NotFoundView} />;
    </Switch>
  </>
);

export default App;
