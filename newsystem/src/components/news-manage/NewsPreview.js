import React, { useEffect, useState } from 'react';
import { Descriptions, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons'; // 导入箭头图标
import { useParams } from 'react-router-dom'; // 使用 useParams
import axios from 'axios';
import moment from 'moment'; // 导入 moment 库
export default function NewsPreview() {
  const [news, setNews] = useState(null);
  const { id } = useParams(); // 使用 useParams 获取 id 参数
  console.log(news);

  useEffect(() => {
    // 使用 id 请求新闻数据
    axios
      .get(`/news/${id}?_expand=category&_expand=role`) // 使用 id 作为动态参数
      .then((res) => {
        setNews(res.data);
      })
      .catch((error) => {
        console.error('加载新闻失败:', error); // 处理请求错误
      });
  }, [id]); // id 作为依赖项，每次 id 改变时重新请求数据

  // 如果没有加载到新闻数据，显示 loading 状态
  if (!news) {
    return <div>Loading...</div>;
  }
  const auditList = ['未通过', '通过', '待审核', '已通过'];
  const publishList = ['未发布', '待发布', '已上线', '已下线'];
  const colorList = ['black', 'orange', 'green', 'red'];
  return (
    <div>
      {news && (
        <div>
          <div style={{ padding: '20px' }}>
            {/* 返回按钮和新闻标题放在同一行 */}
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
              <h1 style={{ margin: 0 }}>{news.title}</h1> {/* 显示新闻标题 */}
              <span
                style={{
                  fontSize: '14px', // 让标签更小
                  color: '#888', // 灰色字体
                  marginLeft: '10px', // 标签和标题之间的间隔
                }}
              >
                {news.category.title}
              </span>
            </div>

            <Descriptions
              size="small"
              column={3}
            >
              <Descriptions.Item label="创建者">
                {news.author}
              </Descriptions.Item>

              <Descriptions.Item label="创建时间">
                {moment(news.createTime).format('YYYY-MM-DD HH:mm:ss')}
              </Descriptions.Item>
              <Descriptions.Item label="发布时间">
                {news.publishTime
                  ? moment(news.publishTime).format('YYYY-MM-DD HH:mm:ss')
                  : '-'}
              </Descriptions.Item>
              <Descriptions.Item label="区域">{news.region}</Descriptions.Item>
              <Descriptions.Item label="审核状态">
                <span style={{ color: colorList[news.auditState] }}>
                  {auditList[news.auditState]}
                </span>
              </Descriptions.Item>
              <Descriptions.Item label="发布状态">
                <span style={{ color: colorList[news.publishState] }}>
                  {publishList[news.publishState]}
                </span>
              </Descriptions.Item>
              <Descriptions.Item label="访问数量">
                {news.view}
              </Descriptions.Item>
              <Descriptions.Item label="点赞数量">
                {news.star}
              </Descriptions.Item>
              <Descriptions.Item label="评论数量">
                {news.remarks}
              </Descriptions.Item>
            </Descriptions>
          </div>
        </div>
      )}
      <div>
        <div
          style={{ padding: '20px' }}
          dangerouslySetInnerHTML={{ __html: news.content }}
        ></div>
      </div>
    </div>
  );
}
