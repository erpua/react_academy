import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'modern-normalize/modern-normalize.css';
import './styles/styles.css';

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
); */

const root = ReactDOM.createRoot(
  document.getElementById('root'),
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
