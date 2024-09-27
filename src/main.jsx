import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
/*remember to import Browser router from the react router
in order to use the custom <BrowserRouter/> tag that will
wrap the entire app as seen below */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter><App /></BrowserRouter>
      
  </StrictMode>,
)
