import React, { useState } from 'react';
import { Layout, Dropdown, Menu, Avatar } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

function TopHeader() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate(); // 使用 useNavigate 获取 navigate 函数

  const changeCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const {
    role: { roleName },
    username,
  } = JSON.parse(localStorage.getItem('token'));
  const menu = (
    <Menu>
      <Menu.Item key="1">{roleName}</Menu.Item>
      <Menu.Item
        key="2"
        danger
        onClick={() => {
          localStorage.removeItem('token');
          navigate('/login'); // 使用 navigate 替代 history.replace
        }}
      >
        退出登录
      </Menu.Item>
    </Menu>
  );

  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {/* 左侧折叠按钮 */}
      {collapsed ? (
        <MenuUnfoldOutlined
          onClick={changeCollapsed}
          aria-label="展开菜单"
        />
      ) : (
        <MenuFoldOutlined
          onClick={changeCollapsed}
          aria-label="折叠菜单"
        />
      )}

      {/* 右侧用户信息 */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>
          欢迎 <span style={{ color: '#1890ff' }}>{username}</span>回来
        </span>
        <Dropdown overlay={menu}>
          <Avatar
            size="large"
            icon={<UserOutlined />}
          />
        </Dropdown>
      </div>
    </Header>
  );
}

export default TopHeader;
