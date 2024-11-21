import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './09_tailwindcss.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
