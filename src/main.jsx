import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import './index.css';
const { VITE_PATH } = import.meta.env;

let path;

if (VITE_PATH) {
  path = `/${VITE_PATH}/`;
} else {
  path = null;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={path}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
