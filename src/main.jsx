import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Add loading state to prevent blank page during React initialization
const root = document.getElementById('root');

// Show loading spinner while React loads
root.innerHTML = `
  <div class="hero-loading">
    <div>
      <div class="loading-spinner"></div>
      <p style="margin-top: 20px; font-size: 18px;">Loading DR General Cleaning...</p>
    </div>
  </div>
`;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
