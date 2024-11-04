import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';
import App from './19_首次访问漫游式引导.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
