import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import sum from '@/test';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import './theme.css';
import { Button } from 'antd-mobile';
import { Provider } from 'react-redux';
import store from './store';
const total = sum(1, 3);
console.log(total);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
