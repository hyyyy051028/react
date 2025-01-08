import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';

import SideMenu from '../../components/sandbox/SideMenu';
import TopHeader from '../../components/sandbox/TopHeader';
import NewsRouter from '../../components/sandbox/NewsRouter';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
const { Content } = Layout;

export default function NewsSandBox() {
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

  nprogress.start();
  useEffect(() => {
    nprogress.done();
  });

  return (
    <Layout>
      <SideMenu />
      <Layout className="site-layout">
        <TopHeader />
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            overflow: 'auto',
            minHeight: 280,
          }}
        >
          <NewsRouter />
        </Content>
      </Layout>
    </Layout>
  );
}
