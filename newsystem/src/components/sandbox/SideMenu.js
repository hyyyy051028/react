import React, { useEffect, useState } from 'react';
import {
  AppstoreOutlined,
  MailOutlined,
  UserOutlined,
  FileTextOutlined,
  FileSearchOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import './index.css';
import axios from 'axios';

const { Sider } = Layout;

const {
  role: { rights },
} = JSON.parse(localStorage.getItem('token'));

function SideMenu() {
  const [menu, setMenu] = useState([]); // 用来保存菜单数据
  const navigate = useNavigate(); // 使用 useNavigate 钩子
  const location = useLocation(); // 使用 useLocation 获取当前路径

  // 根据 pathname 动态设置选中的菜单项
  const selectKeys = [location.pathname];
  const openKeys = ['/' + location.pathname.split('/')[1]];

  // 检查当前用户是否有权限
  const checkPagePermission = (item) => {
    return rights.includes(item.key); // 只显示有权限的菜单项
  };

  useEffect(() => {
    // 从 json-server 获取菜单数据
    axios
      .get('http://localhost:5000/rights?_embed=children')
      .then((res) => {
        console.log(res.data); // 查看返回的数据

        // 格式化数据以适应 Menu 组件
        const formattedMenu = res.data
          .filter((item) => checkPagePermission(item)) // 过滤掉没有权限的菜单项
          .map((item) => ({
            key: item.key,
            icon: getIcon(item.key), // 使用 getIcon 函数来映射 key 到 React 图标组件
            label: item.title,
            children:
              item.children && item.children.length > 0
                ? item.children
                    .filter((child) => checkPagePermission(child)) // 过滤子菜单项
                    .map((child) => ({
                      key: child.key,
                      label: child.title,
                    }))
                : null,
          }));
        setMenu(formattedMenu); // 设置菜单
      })
      .catch((err) => {
        console.error('获取菜单数据失败:', err);
      });
  }, [rights]); // 依赖 rights，确保权限变动时重新渲染菜单

  // 根据 key 返回对应的图标组件
  const getIcon = (key) => {
    switch (key) {
      case '/home':
        return <UserOutlined />;
      case '/user-manage':
        return <MailOutlined />;
      case '/right-manage':
        return <AppstoreOutlined />;
      case '/news-manage':
        return <FileTextOutlined />;
      case '/audit-manage':
        return <FileSearchOutlined />;
      case '/publish-manage':
        return <CalendarOutlined />;
      default:
        return null;
    }
  };

  const onClick = (e) => {
    navigate(e.key); // 使用 navigate 进行页面跳转
  };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={false}
    >
      <div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
        <div className="logo">全球新闻发布系统</div>
        <div style={{ flex: 1, overflow: 'auto' }}>
          <Menu
            theme="dark"
            onClick={onClick}
            selectedKeys={selectKeys} // 设置选中的菜单项
            defaultOpenKeys={openKeys} // 默认展开的菜单项
            mode="inline"
            items={menu} // 渲染菜单项
          />
        </div>
      </div>
    </Sider>
  );
}

export default SideMenu;
