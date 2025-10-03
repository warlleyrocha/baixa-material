import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// pwa
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((reg) => console.log('Service Worker registrado!', reg))
      .catch((err) => console.log('Erro no Service Worker', err));
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
