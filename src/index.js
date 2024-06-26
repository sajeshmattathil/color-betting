import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Assuming App is your main component

// Create a root instance
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your application using the root instance
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
