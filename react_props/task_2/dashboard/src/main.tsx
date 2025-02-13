import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App/App.jsx';
import './App/App.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}

