import React from 'react';
import { Button } from 'antd';
import axios from 'axios';
export default function Home() {
  const ajax = () => {
    //get方法
    axios.get('http://localhost:5000/rights?id=1').then((res) => {
      console.log(res.data);
    });
    // axios.post('http://localhost:8000/posts', {
    //   id: '4',
    //   title: 'wangjiale',
    //   views: '900',
    // });
    //修改
    // axios.put('http://localhost:8000/posts/1', {
    //   title: '修改',
    // });
    //更新
    // axios.patch('http://localhost:8000/posts/1', {
    //   title: '修改了',
    // });
    //删除
    // axios.delete('http://localhost:8000/posts/1');
    //_embed 向下关联
    // axios.get('http://localhost:8000/posts?_embed=comments').then((res) => {
    //   console.log(res.data);
    // });
    //_expand 向上关联
    // axios.get('http://localhost:8000/comments?_expand=posts').then((res) => {
    //   console.log(res.data);
    // });
  };
  return (
    <div>
      <Button
        type="primary"
        onClick={ajax}
      >
        Button
      </Button>
    </div>
  );
}
