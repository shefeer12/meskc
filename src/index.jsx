import React from 'react'
import ReactDOM from 'react-dom/client';  // for React 18+
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Render your App wrapped inside BrowserRouter
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
