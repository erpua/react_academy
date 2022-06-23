import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import store from './redux/store';
import 'modern-normalize/modern-normalize.css';
import './styles/base.scss';

console.log('STORE =>', store);
const root = ReactDOM.createRoot(document.getElementById('root'));

/* BrowserRouter => takes control of routing */

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
);
