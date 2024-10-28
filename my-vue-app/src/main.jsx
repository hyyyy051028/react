import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './16-memo优化组件.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
