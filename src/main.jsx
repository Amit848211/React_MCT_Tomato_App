import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StoreContextProvider from './context/ContexApi.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <StoreContextProvider>
  <App />
  </StoreContextProvider>
    
  </React.StrictMode>,
)
