import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// we can't write function name start with lowercase, Always when we make functions try to start its name with uppercase
// we make component in vite in .jsx formate, the vite don't recognize the .js folder as component
