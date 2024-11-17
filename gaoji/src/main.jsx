import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './10_react-spring动画库.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
