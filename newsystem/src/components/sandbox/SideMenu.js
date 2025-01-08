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
import { connect } from 'react-redux';
const { Sider } = Layout;

const iconMapping = {
  '/home': <UserOutlined />,
  '/user-manage': <MailOutlined />,
  '/right-manage': <AppstoreOutlined />,
  '/news-manage': <FileTextOutlined />,
  '/audit-manage': <FileSearchOutlined />,
  '/publish-manage': <CalendarOutlined />,
};

function SideMenu(props) {
  const [menu, setMenu] = useState([]); // 用来保存菜单数据
  const [rights, setRights] = useState([]); // 用来保存权限数据
  const navigate = useNavigate();
  const location = useLocation();

  // 从 localStorage 获取最新的 token 和权限信息
  const updateRights = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const {
        role: { rights },
      } = JSON.parse(token);
      setRights(rights); // 更新权限数据
    }
  };

  // 根据 pathname 动态设置选中的菜单项
  const selectKeys = [location.pathname];
  const openKeys = ['/' + location.pathname.split('/')[1]];

  // 检查当前用户是否有权限
  const checkPagePermission = (item) => {
    return item.pagepermisson && rights.includes(item.key); // 只显示有权限的菜单项
  };

  useEffect(() => {
    // 每次组件渲染时都更新权限数据
    updateRights();
  }, []); // 初次渲染时读取权限

  useEffect(() => {
    // 从 json-server 获取菜单数据
    axios
      .get('http://localhost:5000/rights?_embed=children')
      .then((res) => {
        // 格式化数据以适应 Menu 组件
        const formattedMenu = res.data
          .filter((item) => checkPagePermission(item)) // 过滤掉没有权限的菜单项
          .map((item) => ({
            key: item.key,
            icon: iconMapping[item.key] || null, // 使用 iconMapping 提供的图标
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

  const onClick = (e) => {
    navigate(e.key); // 使用 navigate 进行页面跳转
  };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={props.isCollapsed}
    >
      <div
        style={{
          display: 'flex',
          height: '100%',
          flexDirection: 'column',
          background: '#001529',
        }}
      >
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

const mapStateToProps = ({ CollapsedReducer: { isCollapsed } }) => ({
  isCollapsed,
});

export default connect(mapStateToProps)(SideMenu);
