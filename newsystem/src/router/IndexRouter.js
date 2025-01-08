import React, { useState, useEffect } from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from '../views/login/Login';
import NewsSandBox from '../views/sandbox/NewsSandBox';
import News from '../views/news/News';
import Detail from '../views/news/Detail';

export default function IndexRouter() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    // 监听 localStorage 中 token 的变化
    const handleStorageChange = () => {
      setToken(localStorage.getItem('token'));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [token]);

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/news"
          element={<News />}
        />
        <Route
          path="/detail/:id"
          element={<Detail />}
        />
        <Route
          path="/*"
          element={token ? <NewsSandBox /> : <Navigate to="/login" />}
        />
      </Routes>
    </HashRouter>
  );
}
