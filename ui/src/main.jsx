import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './01-antd的基本使用.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
