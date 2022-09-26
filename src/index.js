import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'modern-normalize/modern-normalize.css';
import './styles/base.scss';
import AuthProvider from './context/AuthProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));

/* import authContext from './context/authContext';
console.log('authContext =>', authContext); */

// root.render(
//  /*  <React.StrictMode> */
//     <BrowserRouter>
//     {/* Context automatically provide context with variable "value={{ a:5, b:10 }}" */}
//       <authContext.Provider value={{ name: 'Mango' }}>
//         {/* Everything that is inside of App => has automatic acces to value of object "Provider" */}
//         <App />
//       </authContext.Provider>
//     </BrowserRouter>
// /*   </React.StrictMode> */
// );

root.render(
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>

  );