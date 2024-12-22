import React, { useEffect, useRef } from 'react';
import { Button, Form, Input, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import './Login.css';
import * as THREE from 'three';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // 导入 useNavigate

export default function Login() {
  const navigate = useNavigate(); // 使用 useNavigate 钩子

  const onFinish = (value) => {
    console.log(value);
    axios
      .get(
        `http://localhost:5000/users?username=${value.username}&password=${value.password}&roleState=true&_expand=role`
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.length === 0) {
          message.error('用户名或密码错误');
        } else {
          localStorage.setItem('token', JSON.stringify(res.data[0]));
          navigate('/home'); // 使用 navigate 进行路由跳转
        }
      });
  };

  const containerRef = useRef(null); // 用来引用容器

  useEffect(() => {
    // 创建场景、相机和渲染器
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement); // 将渲染器添加到 DOM

    // 创建粒子材质
    const particlesCount = 500;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);

    // 随机生成粒子的位置
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000; // X轴
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000; // Y轴
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2000; // Z轴
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );

    const material = new THREE.PointsMaterial({
      color: 0xffffff, // 粒子颜色
      size: 3, // 粒子大小
    });

    const particles = new THREE.Points(particlesGeometry, material);
    scene.add(particles);

    // 设置相机位置
    camera.position.z = 500;

    // 动画函数
    const animate = function () {
      requestAnimationFrame(animate);

      // 旋转粒子效果
      particles.rotation.x += 0.001;
      particles.rotation.y += 0.001;

      // 渲染场景
      renderer.render(scene, camera);
    };

    animate(); // 启动动画

    // 清理函数
    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <div
      style={{
        background: 'rgb(35, 39, 65)',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* 3D粒子背景 */}
      <div
        ref={containerRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      ></div>

      <div
        className="formContainer"
        style={{ position: 'relative', zIndex: 10 }}
      >
        <div className="logintitle">全球新闻发布管理系统</div>
        <Form
          name="normal_login"
          className="login-form"
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
