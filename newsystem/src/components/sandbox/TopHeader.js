import React, { useState } from 'react';
import { Layout, Dropdown, Menu, Avatar } from 'antd'; // 确保从 antd 导入 Menu 和 Dropdown
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header } = Layout;

export default function TopHeader() {
  const [collapsed, setCollapsed] = useState(false);

  const changeCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const menu = (
    <Menu>
      <Menu.Item>超级管理员</Menu.Item>

      <Menu.Item danger>退出登录</Menu.Item>
    </Menu>
  );

  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
      }}
    >
      {collapsed ? (
        <MenuUnfoldOutlined onClick={changeCollapsed} />
      ) : (
        <MenuFoldOutlined onClick={changeCollapsed} />
      )}
      <div style={{ float: 'right' }}>
        <span>欢迎admin回来</span>
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
