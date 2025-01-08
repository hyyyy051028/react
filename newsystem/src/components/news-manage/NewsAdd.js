import React, { useState, useEffect, useRef } from 'react';
import {
  Breadcrumb,
  Typography,
  Steps,
  Button,
  Form,
  Input,
  Select,
  notification,
  message,
} from 'antd';
import style from './NewsAdd.module.css';
import axios from 'axios';
import NewsEditor from './NewsEditor';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;
const { Option } = Select;

const CustomHeader = () => {
  const [current, setCurrent] = useState(0);
  const [categoryList, setCategoryList] = useState([]);
  const [formInfo, setFormInfo] = useState({});
  const [content, setContent] = useState('');
  const NewsForm = useRef(null);
  const navigate = useNavigate(); // 使用 react-router-dom 的 useNavigate
  const User = JSON.parse(localStorage.getItem('token'));

  // 获取分类列表
  useEffect(() => {
    axios.get('/categories').then((res) => {
      setCategoryList(res.data);
    });
  }, []);

  // 保存或提交新闻
  const handleSave = (auditState) => {
    axios
      .post('/news', {
        ...formInfo,
        title: formInfo.title || '千锋教育', // 默认标题，如果表单没有填写
        categoryId: formInfo.categoryId || 3, // 默认分类ID
        content: content,
        region: User.region || '全球',
        author: User.username, // 从 User 获取作者
        roleId: User.roleId, // 从 User 获取角色ID
        auditState: auditState, // 草稿或审核
        publishState: 0, // 默认未发布
        createTime: Date.now(),
        star: 0,
        view: 0,
      })
      .then((res) => {
        // 根据审核状态跳转
        navigate(
          auditState === 0 ? '/news-manage/draft' : '/audit-manage/list'
        );

        notification.info({
          message: `通知`,
          description: `您可以到${
            auditState === 0 ? '草稿箱' : '审核列表'
          }中查看您的新闻`,
          placement: 'bottomRight',
        });
      })
      .catch((err) => {
        console.error('保存新闻失败:', err);
      });
  };

  // 下一步操作
  const next = () => {
    if (current === 0) {
      NewsForm.current
        .validateFields()
        .then((values) => {
          setFormInfo(values);
          setCurrent(current + 1); // 转到下一个步骤
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      if (content === '' || content === '<p></p>') {
        message.error('请填写新闻内容');
      } else {
        setCurrent(current + 1);
      }
    }
  };

  // 上一步操作
  const prev = () => {
    setCurrent(current - 1); // 返回到上一步
  };

  return (
    <div style={{ padding: '16px' }}>
      <Breadcrumb items={[{ title: '撰写新闻' }, { title: 'Page' }]} />
      <Steps
        current={current}
        items={[
          { title: '基本信息', description: '填写新闻的基本信息' },
          { title: '新闻内容', description: '填写新闻的内容' },
          { title: '新闻提交', description: '提交新闻' },
        ]}
      />
      <div className={current === 0 ? '' : style.active}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          ref={NewsForm}
        >
          <Form.Item
            label="新闻标题"
            name="title"
            rules={[{ required: true, message: '请输入新闻标题!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="新闻分类"
            name="categoryId"
            rules={[{ required: true, message: '请选择新闻分类!' }]}
          >
            <Select>
              {categoryList.map((item) => (
                <Option
                  key={item.id}
                  value={item.id}
                >
                  {item.title}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </div>

      <div className={current === 1 ? '' : style.active}>
        <NewsEditor getContent={(htmlContent) => setContent(htmlContent)} />
      </div>

      <div className={current === 2 ? '' : style.active}></div>

      <div style={{ marginTop: '50px' }}>
        {current === 2 && (
          <span>
            <Button
              type="primary"
              onClick={() => handleSave(0)} // 保存草稿
            >
              保存草稿箱
            </Button>
            <Button
              danger
              onClick={() => handleSave(1)} // 提交审核
            >
              提交审核
            </Button>
          </span>
        )}
        {current < 2 && (
          <Button
            type="primary"
            onClick={next}
          >
            下一步
          </Button>
        )}
        {current > 0 && <Button onClick={prev}>上一步</Button>}
      </div>
    </div>
  );
};

export default CustomHeader;
