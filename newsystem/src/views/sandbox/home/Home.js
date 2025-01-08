import React, { useEffect, useState, useRef } from 'react';
import { Button } from 'antd';
import axios from 'axios';
import { Card, Col, Row, List, Drawer } from 'antd';
import { Avatar } from 'antd';
import * as echarts from 'echarts'; // 修复 echarts 导入方式
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Meta } from 'antd/lib/list/Item';
import _ from 'lodash';

export default function Home() {
  const [viewList, setviewList] = useState([]);
  const [starList, setstarList] = useState([]);
  const [pieChart, setpieChart] = useState(null);
  const [visible, setvisible] = useState(false);
  const [allList, setallList] = useState([]);
  const barRef = useRef();
  const pieRef = useRef();
  const {
    username,
    region,
    role: { roleName },
  } = JSON.parse(localStorage.getItem('token'));
  console.log(username);

  // 获取最常浏览和点赞最多的新闻数据
  useEffect(() => {
    axios
      .get(
        '/news?publishState=2&_expand=category&_sort=view&_order=desc&_limit=6'
      )
      .then((res) => {
        setviewList(res.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        '/news?publishState=2&_expand=category&_sort=star&_order=desc&_limit=6'
      )
      .then((res) => {
        setstarList(res.data);
      });
  }, []);

  // 渲染分类柱状图
  const renderBarView = (obj) => {
    var myChart = echarts.init(barRef.current);

    const option = {
      title: {
        text: '新闻分类图示',
      },
      tooltip: {},
      legend: {
        data: ['数量'],
      },
      xAxis: {
        data: Object.keys(obj),
        axisLabel: {
          rotate: '45',
          interval: 0,
        },
      },
      yAxis: {
        minInterval: 1,
      },
      series: [
        {
          name: '数量',
          type: 'bar',
          data: Object.values(obj).map((item) => item.length),
        },
      ],
    };

    myChart.setOption(option);
    window.onresize = () => {
      myChart.resize();
    };
  };

  // 渲染饼状图
  const renderPieView = (obj) => {
    // 过滤当前用户的新闻
    const currentList = allList.filter((item) => item.author === username); // 修改为 `author` 而非 `autor`（假设是拼写错误）

    // 使用 _.groupBy 对新闻进行分类
    const groupObj = _.groupBy(currentList, (item) => item.category.title);

    // 将分组后的数据转换为饼图所需的格式
    const data = Object.entries(groupObj).map(([category, items]) => ({
      name: category,
      value: items.length, // 每个分类的新闻数量
    }));

    // 如果 pieChart 已经初始化，则直接更新，否则初始化一个新的图表实例
    let myChart;
    if (!pieChart) {
      myChart = echarts.init(pieRef.current);
      setpieChart(myChart); // 设置状态来保持对 myChart 的引用
    } else {
      myChart = pieChart;
    }

    // 配置饼图的 option
    const option = {
      title: {
        text: '当前用户新闻分类图示',
        subtext: 'Fake Data', // 可自定义
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: '发布数量',
          type: 'pie',
          radius: '50%',
          data: data, // 使用我们转换的数据
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };

    // 设置图表的配置
    myChart.setOption(option);
  };

  // 获取新闻分类数据并渲染柱状图
  useEffect(() => {
    axios.get('/news?publishState=2&_expand=category').then((res) => {
      const categoryData = _.groupBy(res.data, (item) => item.category.title);
      renderBarView(categoryData);
      setallList(res.data);
    });

    return () => {
      window.onresize = null;
    };
  }, []);

  // 获取用户信息

  return (
    <div>
      <Row
        gutter={16}
        style={{ display: 'flex', flexDirection: 'row' }}
      >
        {/* 使最左侧的Card有弹性布局 */}
        <Col
          span={8}
          style={{ display: 'flex', flexDirection: 'column', flex: 1 }}
        >
          <Card
            title="用户最常浏览"
            bordered={true}
            style={{ flex: 1 }} // 设置弹性布局，确保卡片高度自动调整
          >
            <List
              size="small"
              dataSource={viewList}
              renderItem={(item) => (
                <List.Item>
                  <a href={`#/news-manage/preview/${item.id}`}>{item.title}</a>
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col
          span={8}
          style={{ display: 'flex', flexDirection: 'column', flex: 1 }}
        >
          <Card
            title="用户点赞最多"
            bordered={true}
            style={{ flex: 1 }} // 设置弹性布局，确保卡片高度自动调整
          >
            <List
              size="small"
              dataSource={starList}
              renderItem={(item) => (
                <List.Item>
                  <a href={`#/news-manage/preview/${item.id}`}>{item.title}</a>
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Card title"
            bordered={false}
          >
            <Card
              style={{
                width: '100%',
                height: '100%', // 让卡片占满父容器的高度
              }}
              cover={
                <div
                  style={{
                    width: '100%',
                    height: '200px', // 固定高度或自适应父容器高度
                    overflow: 'hidden',
                  }}
                >
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover', // 图片自适应容器大小
                    }}
                  />
                </div>
              }
              actions={[
                <SettingOutlined
                  key="setting"
                  onClick={() => {
                    setTimeout(() => {
                      setvisible(true);
                      axios
                        .get('/news?publishState=2&_expand=category')
                        .then((res) => {
                          const categoryData = _.groupBy(
                            res.data,
                            (item) => item.category.title
                          );
                          renderPieView(categoryData); // 渲染 Pie 图表
                        });
                    }, 0);
                  }}
                />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={username}
                description={
                  <div>
                    <b>{region ? region : '全球'}</b>
                    <span
                      style={{
                        paddingLeft: '30px',
                      }}
                    >
                      {roleName}
                    </span>
                  </div>
                }
              />
            </Card>
          </Card>
        </Col>
      </Row>

      {/* Drawer 显示时渲染 Pie 图表 */}
      <Drawer
        width="700px"
        title="个人新闻分类"
        placement="right"
        closable={true}
        onClose={() => {
          setvisible(false);
        }}
        open={visible}
      >
        <div
          ref={pieRef}
          style={{
            width: '100%',
            height: '400px',
            marginTop: '30px',
            marginLeft: '60px',
          }}
        ></div>
      </Drawer>

      {/* 渲染柱状图 */}
      <div
        ref={barRef}
        id="main"
        style={{
          width: '100%',
          height: '400px',
          marginTop: '30px',
        }}
      ></div>
    </div>
  );
}
