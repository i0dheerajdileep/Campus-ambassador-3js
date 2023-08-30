import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CustomScrollbar from './components/CustomScrollbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomScrollbar>
      <App />
    </CustomScrollbar>
  </React.StrictMode>,
)
