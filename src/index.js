import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/base.scss';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

/* BrowserRouter => takes control of routing */

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
);
