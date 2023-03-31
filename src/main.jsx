import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { JournalApp } from './JournalApp'
import { store } from './store/'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
      <BrowserRouter>
        <JournalApp />
      </BrowserRouter>

  </React.StrictMode>,
)
