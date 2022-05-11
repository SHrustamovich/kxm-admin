import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'
import {LoginProvider} from './lib/Context/Context'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <LoginProvider>
    <App />
    </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
