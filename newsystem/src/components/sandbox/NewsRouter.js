import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Home from '../../views/sandbox/home/Home';
import UserList from '../../views/sandbox/user-manage/UserList';
import RoleList from '../../views/sandbox/right-manage/RoleList';
import RightList from '../../views/sandbox/right-manage/RightList';
import Nopermission from '../../views/sandbox/nopermission/Nopermission';
import NewsAdd from '../news-manage/NewsAdd';
import NewsDraft from '../news-manage/NewsDraft';
import NewsCategory from '../news-manage/NewsCategory';
import Unpublished from '../publish-manage/Unpublished';
import Published from '../publish-manage/Published';
import Sunset from '../publish-manage/Sunset';
import Audit from '../audit-manage/Audit';
import AuditList from '../audit-manage/AuditList';
import NewsPreview from '../news-manage/NewsPreview';
import NewsUpdate from '../news-manage/NewsUpdate';
import { Spin } from 'antd';
import { connect } from 'react-redux';
// 路由映射
const LocalRouterMap = {
  '/home': Home,
  '/user-manage/list': UserList,
  '/right-manage/role/list': RoleList,
  '/right-manage/right/list': RightList,
  '/news-manage/add': NewsAdd,
  '/news-manage/draft': NewsDraft,
  '/news-manage/category': NewsCategory,
  '/news-manage/preview/:id': NewsPreview,
  '/news-manage/update/:id': NewsUpdate,
  '/audit-manage/audit': Audit,
  '/audit-manage/list': AuditList,
  '/publish-manage/unpublished': Unpublished,
  '/publish-manage/published': Published,
  '/publish-manage/sunset': Sunset,
  '*': Nopermission,
};

function NewsRouter(props) {
  const [BackRouteList, setBackRouteList] = useState([]);

  useEffect(() => {
    // 请求后端的权限数据
    Promise.all([
      axios.get('http://localhost:5000/rights'),
      axios.get('http://localhost:5000/children'),
    ])
      .then((res) => {
        const mergedRoutes = [...res[0].data, ...res[1].data];

        setBackRouteList(mergedRoutes); // 更新路由数据
      })
      .catch((err) => {
        console.error('请求失败', err); // 捕获请求错误
      });
  }, []);

  // 在数据加载前，给用户一个 loading 状态，避免空白页
  if (BackRouteList.length === 0) {
    return <div>Loading...</div>;
  }

  // 检查权限
  const checkRoute = (item) => {
    // 检查 item.key 是否存在于 LocalRouterMap 中且 pagepermission 是否为 1
    const route = LocalRouterMap[item.key];

    return (item.pagepermisson || item.routepermisson) === 1 && route; // 判断权限和路由是否匹配
  };

  // 检查用户权限的函数
  const {
    role: { rights },
  } = JSON.parse(localStorage.getItem('token'));
  const checkUserPermission = (item) => {
    return rights.includes(item.key);
  };

  return (
    <Spin
      size="large"
      spinning={props.isLoading}
    >
      <div>
        <Routes>
          {/* 动态渲染路由 */}
          {BackRouteList.map((item) => {
            // 只有满足权限的路由才渲染
            const Component = LocalRouterMap[item.key] || Nopermission;

            if (checkRoute(item) && checkUserPermission(item)) {
              return (
                <Route
                  key={item.key}
                  path={item.key}
                  element={<Component />} // 确保是组件的实例
                />
              );
            }
            return null;
          })}
          {/* 默认404页面 */}
          <Route
            path="*"
            element={<Nopermission />}
          />
        </Routes>
      </div>
    </Spin>
  );
}
const mapStateToProps = ({ LoadingReducer: { isLoading } }) => {
  return {
    isLoading,
  };
};
const mapDispatchToProps = {
  changeCollapsed() {
    return { type: 'change_loading' };
  },
};
export default connect(mapStateToProps)(NewsRouter);
