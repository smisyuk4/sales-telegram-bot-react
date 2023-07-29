import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import './index.css';
const { VITE_PATH } = import.meta.env;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={VITE_PATH}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
