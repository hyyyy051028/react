import React, { useEffect } from 'react';
import { Table, Button, notification } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import { Tag } from 'antd';
import { useNavigate } from 'react-router-dom';
export default function AuditList() {
  const [dataSource, setdataSource] = useState([]);
  const { username } = JSON.parse(localStorage.getItem('token'));
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        `/news?autor=${username}&auditState_ne=0&publishState_ne=2&_expand=category`
      )
      .then((res) => {
        setdataSource(res.data);
      });
  }, []);

  const columns = [
    {
      title: '新闻标题',
      dataIndex: 'title',
      render: (title, item) => {
        return <a href={`#/news-manage/preview/${item.id}`}>{title}</a>;
      },
    },
    {
      title: '作者',
      dataIndex: 'author',
    },

    {
      title: '新闻分类',
      dataIndex: 'category',
      render: (category) => {
        return <Tag color="orange">{category.title}</Tag>;
      },
    },
    {
      title: '审核状态',
      dataIndex: 'auditState',
      render: (auditState) => {
        const colorList = ['', 'orange', 'green', 'red'];
        const auditList = ['', '审核中', '已通过', '未通过'];
        return <Tag color={colorList[auditState]}>{auditList[auditState]}</Tag>;
      },
    },
    {
      title: '操作',
      render: (item) => {
        return (
          <div>
            {
              // 未通过和审核中的新闻可以进行编辑
              item.auditState === 1 && (
                <Button
                  danger
                  onClick={() => handleRervest(item)}
                >
                  撤销
                </Button>
              )
            }
            {
              // 未通过和审核中的新闻可以进行编辑
              item.auditState === 2 && (
                <Button onClick={() => handlePublish(item)}>发布</Button>
              )
            }
            {
              // 未通过和审核中的新闻可以进行编辑
              item.auditState === 3 && (
                <Button
                  type="primary"
                  onClick={() => handleUpdate(item)}
                >
                  更新
                </Button>
              )
            }
          </div>
        );
      },
    },
  ];
  const handleRervest = (item) => {
    setdataSource(dataSource.filter((data) => data.id !== item.id));
    axios
      .patch(`/news/${item.id}`, {
        auditState: 0,
      })
      .then((res) => {
        notification.info({
          message: '通知',
          description: '您可以到草稿箱中查看您的新闻',
          placement: 'bottomRight',
        });
      });
  };
  const handleUpdate = (item) => {
    navigate(`/news-manage/update/${item.id}`);
  };
  const handlePublish = (item) => {
    axios
      .patch(`/news/${item.id}`, {
        publishState: 2,
        publishTime: Date.now(),
      })
      .then((res) => {
        // 根据审核状态跳转
        navigate('/publish-manage/published');

        notification.info({
          message: `通知`,
          description: `您可以到【发布管理/已经发布】中查看您的新闻`,
          placement: 'bottomRight',
        });
      })
      .catch((err) => {
        console.error('保存新闻失败:', err);
      });
  };
  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          pageSize: 5,
        }}
        rowKey={(item) => item.id}
      />
    </div>
  );
}
