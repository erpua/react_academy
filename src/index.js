import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
/* import store from './redux/store'; */
import 'modern-normalize/modern-normalize.css';
import './styles/base.scss';

/* import { myAction } from './redux/actions'; */

/* action creators */
/* store.dispatch(myAction(5));
store.dispatch(myAction(10)); */
/* console.log('store.dispatch(myAction) =>', store.dispatch(myAction)); */

/* console.log('STORE =>', store);
console.log('store.getState()', store.getState()); */

const root = ReactDOM.createRoot(document.getElementById('root'));

/* BrowserRouter => takes control of routing */

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
);
