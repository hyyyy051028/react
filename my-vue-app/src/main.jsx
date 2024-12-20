import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './23-购物车.jsx';
import './index.css';

createRoot(document.getElementById('root'), {
  identifierPrefix: 'react-',
}).render(
  <StrictMode>
    <App />
  </StrictMode>
);
