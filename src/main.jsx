import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<link href="https://fonts.googleapis.com/css2?family=Irish+Grover&display=swap" rel="stylesheet"></link>

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)