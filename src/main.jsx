import React from 'react';
import ReactDOM from 'react-dom/client';
import RootApp from '@/App'; // Import the RootApp which includes Router
import '@/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>
);