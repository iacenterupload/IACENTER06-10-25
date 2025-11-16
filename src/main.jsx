import React from 'react';
import ReactDOM from 'react-dom/client';
import RootApp from '@/App'; // Import the RootApp which includes Router
import TrackingProvider from '@/components/TrackingProvider';
import '@/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>
);