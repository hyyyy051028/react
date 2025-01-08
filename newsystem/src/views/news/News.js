import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Row, Typography, List } from 'antd';
import _ from 'lodash';

const { Title, Paragraph } = Typography;

export default function News() {
  const [list, setlist] = useState([]);

  useEffect(() => {
    axios.get('/news?publishState=2&_expand=category').then((res) => {
      setlist(
        Object.entries(_.groupBy(res.data, (item) => item.category.title))
      );
    });
  }, []);

  return (
    <div>
      {/* 用 Card 代替 PageHeader */}
      <Card
        bordered={false}
        style={{ marginBottom: 24 }}
      >
        {/* Row 和 Col 用于将 "全球大新闻" 和 "查看新闻" 放在同一行 */}
        <Row align="middle">
          <Col>
            <Title
              level={2}
              style={{ marginBottom: 0, display: 'inline' }}
            >
              全球大新闻
            </Title>
          </Col>
          <Col>
            <Paragraph
              style={{
                marginBottom: 0,
                fontSize: '14px', // 字体大小
                color: 'gray', // 灰色
                display: 'inline', // 使"查看新闻"与标题在同一行
                marginLeft: 8, // 设置适当的间距
              }}
            >
              查看新闻
            </Paragraph>
          </Col>
        </Row>
        <div
          style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 8 }}
        >
          <a href="#/login">登录</a>
        </div>
      </Card>

      {/* 内容部分 */}
      <div className="site-card-wrapper">
        <Row gutter={[16, 16]}>
          {list.map((item) => (
            <Col
              span={8}
              key={item[0]}
            >
              <Card title={item[0]}>
                <List
                  size="small"
                  bordered
                  pagination={{ pageSize: 3 }}
                  dataSource={item[1]}
                  renderItem={(data) => (
                    <List.Item>
                      <a href={`#/detail/${data.id}`}>{data.title}</a>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
