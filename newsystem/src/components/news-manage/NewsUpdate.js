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
import { useParams } from 'react-router-dom';
import style from './NewsAdd.module.css';
import axios from 'axios';
import NewsEditor from './NewsEditor';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons'; // 导入箭头图标

const { Title } = Typography;
const { Option } = Select;

const CustomHeader = (props) => {
  const [current, setCurrent] = useState(0);
  const [categoryList, setCategoryList] = useState([]);
  const [formInfo, setFormInfo] = useState({});
  const [content, setContent] = useState('');
  const NewsForm = useRef(null);
  const navigate = useNavigate(); // 使用 react-router-dom 的 useNavigate
  //   const User = JSON.parse(localStorage.getItem('token'));
  const { id } = useParams(); // 使用 useParams 获取 id 参数
  // 获取分类列表
  useEffect(() => {
    axios.get('/categories').then((res) => {
      setCategoryList(res.data);
    });
  }, []);
  useEffect(() => {
    // 使用 id 请求新闻数据
    axios
      .get(`/news/${id}?_expand=category&_expand=role`) // 使用 id 作为动态参数
      .then((res) => {
        let { title, categoryId, content } = res.data;
        NewsForm.current.setFieldsValue({
          title,
          categoryId,
        }); // 设置表单的默认值
        setContent(content);
      })
      .catch((error) => {
        console.error('加载新闻失败:', error); // 处理请求错误
      });
  }, [id]); // id 作为依赖项，每次 id 改变时重新请求数据
  // 保存或提交新闻
  const handleSave = (auditState) => {
    axios
      .patch(`/news/${id}`, {
        ...formInfo,
        content: content,

        auditState: auditState, // 草稿或审核
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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <Button
          type="link"
          icon={<ArrowLeftOutlined />}
          onClick={() => window.history.back()}
          style={{
            marginRight: '10px', // 给按钮添加右边距
            fontSize: '20px', // 设置按钮图标的大小
          }}
        />
        <h1 style={{ margin: 0 }}>更新新闻</h1> {/* 显示新闻标题 */}
        <span
          style={{
            fontSize: '14px', // 让标签更小
            color: '#888', // 灰色字体
            marginLeft: '10px', // 标签和标题之间的间隔
          }}
        >
          更新
        </span>
      </div>

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
        <NewsEditor
          getContent={(htmlContent) => setContent(htmlContent)}
          content={content}
        />
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
