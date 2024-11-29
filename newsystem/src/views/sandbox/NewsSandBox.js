import React from 'react';
import { Layout } from 'antd';
import { Navigate, Route, Routes } from 'react-router-dom';
import SideMenu from '../../components/sandbox/SideMenu';
import TopHeader from '../../components/sandbox/TopHeader';
import Home from './home/Home';
import UserList from './user-manage/UserList';
import RoleList from './right-manage/RoleList';
import RightList from './right-manage/RightList';
import Nopermission from './nopermission/Nopermission';
import './NewsSandBox.css';
const { Content } = Layout;

export default function NewsSandBox() {
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
            flex: 1,
            minHeight: 280,
          }}
        >
          <Routes>
            <Route
              path="/home"
              element={<Home />}
            />
            <Route
              path="/user-manage/list"
              element={<UserList />}
            />
            <Route
              path="/user-manage/role/list"
              element={<RoleList />}
            />
            <Route
              path="/user-manage/right/list"
              element={<RightList />}
            />
            <Route
              path="/"
              element={
                <Navigate
                  replace
                  to="/home"
                />
              }
            />
            <Route
              path="*"
              element={<Nopermission />}
            />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}
