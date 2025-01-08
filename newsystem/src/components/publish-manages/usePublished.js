import { useEffect, useState } from 'react';
import axios from 'axios';
import { notification } from 'antd';
import { useNavigate } from 'react-router-dom';
function usePublished(type) {
  const { username } = JSON.parse(localStorage.getItem('token'));
  const [dataSource, setdataSource] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`/news?author=${username}&publishState=${type}&_expand=category`)
      .then((res) => {
        setdataSource(res.data);
      });
  }, [username, type]);
  const handlePublish = (id) => {
    console.log(id);
    setdataSource(dataSource.filter((item) => item.id !== id));
    axios
      .patch(`/news/${id}`, {
        publishState: 2,
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
  const handleSunset = (id) => {
    console.log(id);
    setdataSource(dataSource.filter((item) => item.id !== id));
    axios
      .patch(`/news/${id}`, {
        publishState: 3,
      })
      .then((res) => {
        // 根据审核状态跳转
        navigate('/publish-manage/published');

        notification.info({
          message: `通知`,
          description: `您可以到【发布管理/已下线】中查看您的新闻`,
          placement: 'bottomRight',
        });
      })
      .catch((err) => {
        console.error('保存新闻失败:', err);
      });
  };
  const handleDelete = (id) => {
    console.log(id);
    setdataSource(dataSource.filter((item) => item.id !== id));
    axios
      .delete(`/news/${id}`)
      .then((res) => {
        // 根据审核状态跳转
        navigate('/publish-manage/published');

        notification.info({
          message: `通知`,
          description: `您已经删除了已下线的新闻`,
          placement: 'bottomRight',
        });
      })
      .catch((err) => {
        console.error('保存新闻失败:', err);
      });
  };
  return { dataSource, handlePublish, handleSunset, handleDelete };
}
export default usePublished;
