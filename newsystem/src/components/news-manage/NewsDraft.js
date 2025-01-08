import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, notification } from 'antd';
import axios from 'axios';
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { confirm } = Modal;

export default function NewsDraft() {
  const navigate = useNavigate();
  const [dataSource, setdataSource] = useState([]);
  const { username, role } = JSON.parse(localStorage.getItem('token')); // 获取当前用户的角色信息

  // 获取当前角色的草稿新闻列表
  useEffect(() => {
    axios
      .get(`/news?author=${username}&auditState=0&_expand=category`)
      .then((res) => {
        const list = res.data.filter((item) => item.roleId === role.id); // 根据角色过滤草稿数据
        setdataSource(list);
      })
      .catch((err) => {
        console.error('Failed to fetch data:', err);
      });
  }, [username, role.id]); // 依赖当前用户和角色

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      render: (id) => <b>{id}</b>,
    },
    {
      title: '新闻标题',
      dataIndex: 'title',
      render: (title, item) => (
        <a href={`#/news-manage/preview/${item.id}`}>{title}</a>
      ),
    },
    {
      title: '作者',
      dataIndex: 'author',
    },
    {
      title: '新闻分类',
      dataIndex: 'category',
      render: (category) => category.title,
    },
    {
      title: '操作',
      render: (item) => (
        <div>
          <Button
            danger
            shape="circle"
            icon={<DeleteOutlined />}
            onClick={() => confirmMethod(item)}
          />
          <Button
            type="primary"
            shape="circle"
            icon={<EditOutlined />}
            onClick={() => navigate(`/news-manage/update/${item.id}`)}
          />
          <Button
            type="primary"
            shape="circle"
            icon={<UploadOutlined />}
            onClick={() => handleCheck(item.id)}
          />
        </div>
      ),
    },
  ];

  // 审核操作
  const handleCheck = (id) => {
    axios
      .patch(`/news/${id}`, { auditState: 1 })
      .then(() => {
        navigate('/audit-manage/list');
        notification.info({
          message: '通知',
          description: '您可以到审核列表中查看您的新闻',
          placement: 'bottomRight',
        });
      })
      .catch((err) => {
        console.error('Failed to update audit state:', err);
      });
  };

  // 删除新闻确认
  const confirmMethod = (item) => {
    confirm({
      title: '你确定要删除?',
      icon: <ExclamationCircleOutlined />,
      content: '此操作将删除该新闻，确认继续吗?',
      onOk() {
        deleteMethod(item);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  // 删除新闻
  const deleteMethod = (item) => {
    axios
      .delete(`/news/${item.id}`)
      .then(() => {
        setdataSource(dataSource.filter((data) => data.id !== item.id));
        notification.success({
          message: '删除成功',
          description: `新闻《${item.title}》已被成功删除`,
        });
      })
      .catch((err) => {
        console.error('Failed to delete:', err);
        notification.error({
          message: '删除失败',
          description: '删除新闻时发生了错误，请稍后再试。',
        });
      });
  };

  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 5 }}
        rowKey={(item) => item.id}
      />
    </div>
  );
}
