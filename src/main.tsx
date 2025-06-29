// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import App from './App.tsx'

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
  );
} else {
  console.error('Root element not found');
}
