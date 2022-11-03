import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import './scss/main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "react-datepicker/dist/react-datepicker.css";
// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { Contextprovider } from './store/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Contextprovider>
    <App />
  </Contextprovider>
  </React.StrictMode>
);

reportWebVitals();
