import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LoginForm from './LoginForm.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginForm />
  </StrictMode>,
)
