import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import store from './redux/store';
import 'modern-normalize/modern-normalize.css';
import './styles/base.scss';

/* console.log(store.getState()); */

/* import { myAction } from './redux/actions'; */

/* action creators */
/* store.dispatch(myAction(5));
store.dispatch(myAction(10)); */
/* console.log('store.dispatch(myAction) =>', store.dispatch(myAction)); */

/* console.log('STORE =>', store);
console.log('store.getState()', store.getState()); */

const root = ReactDOM.createRoot(document.getElementById('root'));

/* BrowserRouter => takes control of routing */

{
  /* Provider allows connect store and components with using prop store={store} */
}
root.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
